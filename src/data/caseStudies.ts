export interface CaseStudy {
  slug: string;
  client: string;
  location: string;
  industry: string;
  summary: string;
  challenge: string;
  work: string[];
  results: string[];
  services: { label: string; to: string }[];
  liveUrl?: string;
  image?: string;
  publishedAt: string;
  modifiedAt: string;
}

// Add only genuine client projects with permission and supportable results.
// Keeping this empty prevents concept work from being presented as client proof.
export const caseStudies: CaseStudy[] = [];
