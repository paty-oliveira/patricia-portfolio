import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import Job from "./Job";
import { JobExperienceProps } from "./types";

const jobs = [
  {
    companyName: "Google",
    jobTitle: "Staff Software Engineer",
    timePeriod: "November 2022 - Current",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
  {
    companyName: "Microsoft",
    jobTitle: "Software Engineer",
    timePeriod: "November 2000 - November 2022",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
  },
];

const JobExperience: FC<JobExperienceProps> = ({
  title,
  linkText,
  pagePath,
}) => {
  return (
    <section className="container">
      <div className="section__header flex">
        <h3 className="weight-600">{title}</h3>
        <a className="page_link" href={pagePath}>
          {linkText}
        </a>
      </div>
      <div className="experience__content flex">
        {jobs.map(({ companyName, jobTitle, timePeriod, description }) => (
          <Job
            key={`${companyName}_${jobTitle}`}
            companyName={companyName}
            jobTitle={jobTitle}
            timePeriod={timePeriod}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default JobExperience;
