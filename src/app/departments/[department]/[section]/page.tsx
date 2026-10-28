import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { departments, getDepartment } from "@/data/departments/departments";
import { departmentContent } from "@/data/departments/content";
import { getRouteMetadata } from "@/lib/metadata";
export const dynamicParams=false;
export function generateStaticParams(){return departments.flatMap(d=>d.sections.map(s=>({department:d.slug,section:s.slug})));}
export async function generateMetadata(props:PageProps<"/departments/[department]/[section]">):Promise<Metadata>{const {department,section}=await props.params;return getRouteMetadata(`/departments/${department}/${section}`);}
type RecordData=Record<string,unknown>;
function obj(x:unknown):RecordData{return x&&typeof x==="object"&&!Array.isArray(x)?x as RecordData:{};}
function str(x:unknown):string{return typeof x==="string"?x:"";}
function readable(x:unknown):string{
 if(typeof x==="string")return x;
 if(Array.isArray(x))return x.map(readable).filter(Boolean).join(" · ");
 const v=obj(x);return str(v.text)||str(v.description)||str(v.message)||str(v.title)||str(v.name);
}
function Content({data,section,deptSlug}:{data:RecordData;section:string;deptSlug:string}){
 const original=obj(data.original);const blocks:ReactNode[]=[];
 const card=(title:string,body:unknown,key?:string)=>{const value=readable(body);if(!value)return;blocks.push(<article key={key||`${title}-${blocks.length}`} data-anim="card" className="rounded-2xl border border-primary/10 bg-eit-surface p-7 sm:p-9"><h3 className="mb-3 text-xl font-semibold text-primary">{title}</h3><p className="whitespace-pre-line leading-8 text-primary/80">{value}</p></article>);};
 const items=(label:string,entries:unknown)=>{if(!Array.isArray(entries))return;entries.forEach((entry,i)=>card(`${label} ${i+1}`,entry,`${label}-${i}`));};
 if(section==="overview"){card("Department Overview",data.overview);items("Department Highlight",data.overviewDetails);}
 if(section==="hod-message"){const hod=obj(data.hod);const name=str(hod.name)||"Head of Department";card(name,hod.message);}
 if(section==="vision"||section==="vision-mission"){card("Vision",data.vision);items("Mission",data.mission);}
 if(section==="peo"||section==="pos"||section==="peo-po-pso"){
  const outcomes=obj(data.outcomes);const isEce=deptSlug==="electronics-communication-engineering";
  if(isEce&&Array.isArray(data.approvedPEO)){if(section!=="pos"){items("PEO",data.approvedPEO);items("PSO",data.approvedPSO);} }
  else {
   const keys=section==="pos"?["po"]:["peo","po","pso"];
   keys.forEach(k=>{const group=obj(outcomes[k]);const entries=group.items;if(Array.isArray(entries)&&entries.length)items(k.toUpperCase(),entries);else if(str(group.description))card(`${k.toUpperCase()} Overview`,group.description);});
   if(!blocks.length){items("PEO",original.peo);items("PSO",original.pso);}
  }
 }
 if(section==="faculty"){
  const faculty=data.faculty;
  if(Array.isArray(faculty))faculty.forEach((f,i)=>{if(Array.isArray(f))card(str(f[0])||`Faculty ${i+1}`,f.slice(1).filter(Boolean).join(" · "),`faculty-${i}`);else{const o=obj(f);card(str(o.name)||`Faculty ${i+1}`,Object.entries(o).filter(([k])=>k!=="name").map(([,v])=>readable(v)).filter(Boolean).join(" · "),`faculty-${i}`);}});
  if(!blocks.length&&str(data.facultyIntro))card("Faculty Directory",data.facultyIntro);
 }
 if(section==="dqac")items("DQAC Member",data.dqacMembers);
 if(section==="labs"){
  if(data.labsInactive===true)card("Laboratories currently inactive","This section is in progress, as instructed by the department.");
  else {const labs=data.laboratories;if(Array.isArray(labs))items("Laboratory",labs);else{const o=obj(labs);if(Array.isArray(o.items)&&o.items.length)items("Laboratory",o.items);else if(str(o.description))card("Department Laboratories",o.description);else if(typeof labs==="string")card("Department Laboratories",labs);}}
 }
 if(section==="newsletter"){
  const news=data.newsletters;
  if(Array.isArray(news))news.forEach((n,i)=>{const o=obj(n);const href=str(o.href);if(href)blocks.push(<a key={`newsletter-${i}`} href={href} target="_blank" rel="noopener noreferrer" className="block rounded-2xl border border-primary/10 bg-eit-surface p-8 text-lg font-semibold text-primary underline underline-offset-4">{str(o.title)||"Department Newsletter"} (PDF)</a>);});
  if(!blocks.length){const legacy=obj(data.legacyNewsletter);if(str(legacy.description))card("Department Newsletter",legacy.description);}
 }
 if(!blocks.length)card("Information pending","No confirmed source records were supplied for this section.");
 return <div className="grid gap-5 md:grid-cols-2">{blocks}</div>;
}
export default async function Page(props:PageProps<"/departments/[department]/[section]">){
 const {department:slug,section:sectionSlug}=await props.params;const dept=getDepartment(slug);const sec=dept?.sections.find(s=>s.slug===sectionSlug);if(!dept||!sec||!(slug in departmentContent))notFound();
 const data=departmentContent[slug as keyof typeof departmentContent] as unknown as RecordData;
 return <><PageHero path={`/departments/${slug}/${sectionSlug}`} eyebrow={dept.name} title={[sec.title]} description={`${sec.title} for the ${dept.name}.`} secondaryAction={{label:`Back to ${dept.shortName}`,href:`/departments/${slug}`}}/>
 <PageSection name="default" eyebrow={dept.shortName} title={[sec.title]}><Content data={data} section={sectionSlug} deptSlug={slug}/>
 <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{dept.sections.filter(s=>s.slug!==sectionSlug).map(s=><Link key={s.slug} href={`/departments/${slug}/${s.slug}`} className="rounded-xl border border-primary/10 bg-eit-surface p-5 text-primary hover:underline">{s.title} →</Link>)}</div>
 </PageSection><ScrollAnimator/></>;
}
