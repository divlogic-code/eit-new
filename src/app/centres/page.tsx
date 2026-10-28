import Link from "next/link";
import { ArrowRight, BookOpen, FileText, GraduationCap, ExternalLink } from "lucide-react";
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { SmartImage } from "@/components/home/SmartImage";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import { centresSection } from "@/data/home/centres";
import { getCentres } from "@/lib/content";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/centres";
export const metadata = getRouteMetadata(path);

const documents = [
  { title: "Centres of Excellence Booklet", detail: "Explore the industry-partnered centres, innovation labs and certification pathways.", href: "/documents/centres/centres-of-excellence-booklet.pdf", Icon: BookOpen },
  { title: "Lab Trainings", detail: "Learn about practical training in AI, cloud, cybersecurity, CRM and digital skills.", href: "/documents/centres/lab-trainings.pdf", Icon: GraduationCap },
  { title: "Value-Added Trainings", detail: "Browse additional training in DSA, full-stack development, Java and professional skills.", href: "/documents/centres/value-added-trainings.pdf", Icon: FileText },
];

export default function Page() {
  // getCentres resolves ImageAsset into ResolvedImage with ready=true when the file exists.
  // Passing raw centre.image directly to SmartImage leaves ready undefined and ALWAYS shows initials.
  const centres = getCentres();
  return (
    <>
      <PageHero path={path} eyebrow={centresSection.eyebrow} title={centresSection.title} description={centresSection.description} tone="sage" />
      <PageSection name="default">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {centres.map((centre) => (
            <li key={centre.id} data-anim="card" className="group overflow-hidden rounded-2xl border border-primary/10 bg-white">
              <div className="relative aspect-[4/3] overflow-hidden [container-type:inline-size]">
                <SmartImage image={centre.image} accent={centre.accent} label={centre.name.slice(0, 2).toUpperCase()} sizes="(min-width: 1024px) 30vw, 90vw" />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-primary">{centre.name}</h2>
                {(centre.description ?? centre.summary) && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{centre.description ?? centre.summary}</p>}
                {centre.href && <Link href={centre.href} className="group/link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore this centre <ArrowRight aria-hidden className="size-4 transition-transform group-hover/link:translate-x-1" /></Link>}
              </div>
            </li>
          ))}
        </ul>
        <section className="mt-14" aria-labelledby="centres-documents-title">
          <div className="mb-6">
            <h2 id="centres-documents-title" className="text-2xl font-semibold text-primary">Brochures & training guides</h2>
            <p className="mt-2 text-sm text-muted-foreground">Open the official EIT training documents as PDFs.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map(({ title, detail, href, Icon }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" data-anim="card" className="group flex h-full flex-col rounded-2xl border border-primary/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/5 text-primary"><Icon aria-hidden className="size-6" /></div>
                <h3 className="text-lg font-semibold text-primary">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{detail}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">View PDF <ExternalLink aria-hidden className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </a>
            ))}
          </div>
        </section>
      </PageSection>
      <ScrollAnimator />
    </>
  );
}
