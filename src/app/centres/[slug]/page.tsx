import Link from "next/link";
import { notFound } from "next/navigation";
import { centres } from "@/data/centres/centres";
import { PageSection } from "@/components/pages/PageSection";
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
export function generateStaticParams(){ return centres.map(centre=>({slug:centre.id})); }
export async function generateMetadata({params}:{params:Promise<{slug:string}>}) { const {slug}=await params; const centre=centres.find(c=>c.id===slug); return {title:centre?`${centre.name} | EIT`:'Centre not found'}; }
export default async function Page({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const centre=centres.find(c=>c.id===slug); if(!centre)notFound();
 return <><PageSection name="default"><div className="mx-auto max-w-5xl py-8"><Link href="/centres" className="text-sm font-semibold text-primary underline">← All Centres</Link><p className="mt-8 text-sm uppercase tracking-widest text-muted-foreground">Centre of Excellence</p><h1 className="mt-3 text-3xl font-bold text-primary md:text-5xl">{centre.name}</h1><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{centre.description}</p>
 <div className="mt-10 grid gap-6 md:grid-cols-2">{centre.sections?.map((section,i)=><section key={i} className="rounded-2xl border border-primary/10 bg-white p-6"><h2 className="text-xl font-semibold text-primary">{section.heading}</h2><div className="mt-4 space-y-3">{section.paragraphs.map((paragraph,j)=><p key={j} className="text-sm leading-relaxed text-muted-foreground">{paragraph}</p>)}</div></section>)}</div><p className="mt-8 text-xs text-muted-foreground">Source: {centre.source}</p></div></PageSection><ScrollAnimator /></>;
}
