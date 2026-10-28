import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { departments } from "@/data/departments/departments";
import { departmentContent } from "@/data/departments/content";
import { getRouteMetadata } from "@/lib/metadata";
import Link from "next/link";
const path = "/departments";
export const metadata = getRouteMetadata(path);
export default function Page() {
 return <><PageHero path={path} eyebrow="Academics" title={["Explore Our", "Departments"]} description="Discover each department's academic focus, faculty, vision, facilities and resources." />
 <PageSection name="default" eyebrow="Seven Departments" title={["Academic", "Departments"]}>
 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">{departments.map((department) => {
 const content=departmentContent[department.slug as keyof typeof departmentContent];
 return <Link key={department.slug} href={`/departments/${department.slug}`} data-anim="card" className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-eit-surface p-7 transition-transform hover:-translate-y-1 sm:p-9">
 <span className="mb-5 text-xs font-semibold uppercase tracking-widest text-primary/60">{department.shortName} / Department</span>
 <h3 className="mb-4 text-2xl font-semibold text-primary">{department.name}</h3>
 <p className="mb-6 flex-1 text-sm leading-7 text-primary/75">{content.overview}</p>
 <span className="text-sm font-semibold text-primary underline underline-offset-4">Explore department →</span>
 </Link>})}</div></PageSection><ScrollAnimator /></>;
}
