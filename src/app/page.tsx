
import { ScrollAnimator } from "@/components/animations/ScrollAnimator";

import { AdmissionsCta } from "@/components/home/AdmissionsCta";
import { CampusLifeSection } from "@/components/home/CampusLifeSection";
import { CelebritySection } from "@/components/home/CelebritySection";
import { CentresSection } from "@/components/home/CentresSection";
import { ClubsSection } from "@/components/home/ClubsSection";
import EventsShowcase from "@/components/home/EventsShowcase";
import { HomeIntro } from "@/components/home/HomeIntro";
import { PlacementsSection } from "@/components/home/PlacementsSection";
import { PodcastsSection } from "@/components/home/PodcastsSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { StudentWorkSection } from "@/components/home/StudentWorkSection";
import { VoicesSection } from "@/components/home/VoicesSection";
import { WhyEitSection } from "@/components/home/WhyEitSection";

import { getHeroSlides, getPrograms } from "@/lib/assets";

import {
  getCampusMoments,
  getCelebrities,
  getCentres,
  getClubs,
  getEpisodes,
  getEvents,
  getPlacementStats,
  getProjects,
  getRecruiters,
  getStories,
  getVoices,
} from "@/lib/content";

import { getRouteMetadata } from "@/lib/metadata";

export const metadata = getRouteMetadata("/");

export default function Page() {
  return (
    <>
      <HomeIntro slides={getHeroSlides()} />

      <CentresSection centres={getCentres()} />

      <WhyEitSection />

      <ProgramsSection programs={getPrograms()} />

      <PlacementsSection
        stories={getStories()}
        stats={getPlacementStats()}
        recruiters={getRecruiters()}
      />

      <StudentWorkSection projects={getProjects()} />

      {/* New white Events carousel */}
      <EventsShowcase events={getEvents(6)} />

      <ClubsSection clubs={getClubs()} />

      <PodcastsSection episodes={getEpisodes()} />

      <CelebritySection people={getCelebrities()} />

      <CampusLifeSection moments={getCampusMoments()} />

      <VoicesSection voices={getVoices()} />

      <AdmissionsCta />

      <ScrollAnimator />
    </>
  );
}
