export interface PlacementStep {
  id: string;
  title: string;
  description: string;
}

// Summarized from https://eitfaridabad.com/placement-process.php
export const placementProcess: PlacementStep[] = [
  { id: 'company-engagement', title: 'Company engagement and collaboration', description: 'The Training & Placement Cell shares student placement brochures, receives job descriptions and eligibility requirements, and coordinates recruitment schedules with employers.' },
  { id: 'pre-placement-training', title: 'Pre-placement preparation', description: 'Students receive aptitude, verbal and logical-reasoning preparation, alongside communication, teamwork, group discussion and interview training.' },
  { id: 'student-registration', title: 'Student registration and resume submission', description: 'Eligible students complete the required placement formalities and submit resumes in the institutional format for recruiter consideration.' },
  { id: 'campus-recruitment', title: 'Campus recruitment', description: 'Recruitment stages may include pre-placement talks, online or offline assessments, group discussions, technical interviews and HR interviews.' },
  { id: 'offer-management', title: 'Selection and offer management', description: 'Selected candidates receive offer letters through the company or placement cell and must respond within the specified deadline, subject to placement policy.' },
  { id: 'post-placement', title: 'Post-placement support', description: 'The placement cell assists with onboarding and joining formalities and provides alumni mentorship and career guidance.' },
];
