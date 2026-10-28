export interface PlacementStatistic {
  id: string;
  label: string;
  value: string;
  academicYear?: string;
  note?: string;
}

// Figures published on the EIT homepage (accessed October 2026).
// These are institutional promotional totals, not a single graduating batch.
export const placementStatistics: PlacementStatistic[] = [
  { id: 'placement-offers', label: 'Placement offers', value: '10,000+', note: 'Institution-reported total' },
  { id: 'highest-package', label: 'Highest package', value: '₹52 LPA' },
  { id: 'internships', label: 'Internships offered', value: '3,500+' },
  { id: 'recruiters', label: 'Recruiting partners', value: '500+' },
  { id: 'placement-rate', label: 'Placement rate', value: '95%', note: 'As displayed on EIT homepage' },
];
