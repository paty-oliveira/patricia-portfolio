export interface JobProps {
  timePeriod: string;
  companyName: string;
  jobTitle: string;
  description: string;
}

export interface JobExperienceProps {
  title: string;
  linkText: string;
  pagePath: string;
  jobs: {
    companyName: string;
    jobTitle: string;
    timePeriod: string;
    description: string;
  }[];
}
