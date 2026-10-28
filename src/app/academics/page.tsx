import { ScrollAnimator } from "@/components/animations/ScrollAnimator";
import { PageHero } from "@/components/pages/PageHero";
import { PageSection } from "@/components/pages/PageSection";
import { QuickLinksGrid } from "@/components/pages/QuickLinksGrid";
import { academicsOverview } from "@/data/academics/overview";
import { getRouteMetadata } from "@/lib/metadata";

const path = "/academics";
export const metadata = getRouteMetadata(path);

export default function Page() {
  return (
    <>
      <PageHero
        path={path}
        eyebrow={academicsOverview.eyebrow}
        title={[...academicsOverview.title]}
        description={academicsOverview.description}
        tone="sage"
      />
      <PageSection
        name="default"
        eyebrow="Academic Resources"
        title={["Explore Academic", "Information"]}
        bg="surface"
      >
        <QuickLinksGrid links={[...academicsOverview.sections]} columns={3} />
      </PageSection>
      <ScrollAnimator />
    </>
  );
}
