
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import {
  QuickLinksGrid,
  type QuickLink,
} from "@/components/pages/QuickLinksGrid";
import { placementGallery } from "@/data/placements/gallery";
import { getRoutesInGroup } from "@/data/site/routes";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/placements/gallery";

export const metadata = getRouteMetadata(path);

export default function Page() {
  const links: QuickLink[] = getRoutesInGroup(
    "placements",
    [path]
  ).map((route) => ({
    href: route.path,
    label: route.title,
  }));

  return (
    <>
      <PageHero
        path={path}
        eyebrow="Placements"
        title={["Placement", "Gallery"]}
        description="Moments from placement drives, offer-letter handovers and campus visits."
        tone="sand"
      />

      <PageSection name="default">
        {placementGallery.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {placementGallery.map((entry) => (
              <li
                key={entry.image.src}
                data-anim="card"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-primary/5"
              >
                <img
                  src={entry.image.src}
                  alt={entry.image.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {entry.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 pt-12">
                    <p className="text-sm font-medium text-white">
                      {entry.caption}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="rounded-xl border border-primary/10 p-8 text-center text-muted-foreground">
            Photographs from placement drives and offer handovers
            will appear here once uploaded.
          </p>
        )}
      </PageSection>

      <PageSection
        name="default"
        bg="surface"
        eyebrow="More"
        title={["Explore", "placements"]}
      >
        <QuickLinksGrid links={links} columns={3} />
      </PageSection>

      <ScrollAnimator />
    </>
  );
}
