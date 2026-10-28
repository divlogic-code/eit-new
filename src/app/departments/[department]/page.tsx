import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import { QuickLinksGrid, type QuickLink } from "@/components/pages/QuickLinksGrid";
import { SectionNote } from "@/components/pages/SectionNote";
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { getDepartment, departments } from "@/data/departments/departments";
import { departmentContent } from "@/data/departments/content";
import { getRouteMetadata } from "@/lib/metadata";

export const dynamicParams = false;
export function generateStaticParams() { return departments.map((department) => ({ department: department.slug })); }
export async function generateMetadata(props: PageProps<"/departments/[department]">): Promise<Metadata> {
 const { department } = await props.params; return getRouteMetadata(`/departments/${department}`);
}
export default async function Page(props: PageProps<"/departments/[department]">) {
 const { department: slug } = await props.params;
 const department = getDepartment(slug);
 if (!department || !(slug in departmentContent)) notFound();
 const content = departmentContent[slug as keyof typeof departmentContent];
 const path = `/departments/${slug}`;
 const links: QuickLink[] = department.sections.map((section) => ({ href: `${path}/${section.slug}`, label: section.title }));
 if (department.journalPapersLegacyPath) links.push({href:`/research/journal-papers/${slug}`,label:"Journal Papers"});
 return <>
  <PageHero path={path} eyebrow="Departments" title={[department.name]} description={`Explore the ${department.shortName} department, academic direction, faculty and resources.`}/>
  <PageSection name="default" eyebrow={department.shortName} title={["Department", "Overview"]}>
   {content.overview ? <div data-anim="card" className="rounded-2xl border border-primary/10 bg-eit-surface p-8 sm:p-10"><p className="whitespace-pre-line text-base leading-8 text-primary">{content.overview}</p></div> : <SectionNote title="Overview pending">The original source did not contain a verified overview for this department.</SectionNote>}
   {"overviewDetails" in content && Array.isArray(content.overviewDetails) && content.overviewDetails.map((item, i) => (
    <div key={i} data-anim="card" className="mt-5 rounded-2xl border border-primary/10 bg-eit-surface p-7">
     <p className="leading-8 text-primary">{item.text}</p>
    </div>
   ))}
   <div className="mt-10"><QuickLinksGrid links={links} columns={3}/></div>
  </PageSection><ScrollAnimator/>
 </>;
}
