/** Navigation content for the Academics overview. */
export const academicsOverview = {
  eyebrow: "Academics at EIT",
  title: ["Explore", "Academics"],
  description: "Find academic information, calendars, circulars, programs, departments, and centres at Echelon Institute of Technology.",
  sections: [
    { href: "/academics/calendar", label: "Academic Calendar", description: "View academic calendars and important academic schedules." },
    { href: "/academics/circulars", label: "Circulars", description: "Access academic circulars and notices." },
    { href: "/programs", label: "Programs", description: "Explore programs offered by the institute." },
    { href: "/departments", label: "Departments", description: "Browse the institute's academic departments." },
    { href: "/centres", label: "Centres", description: "Discover the institute's centres and initiatives." },
  ],
} as const;
