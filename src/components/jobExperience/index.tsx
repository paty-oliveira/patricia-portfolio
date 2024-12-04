import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import Job from "@/components/job";

import { JobExperienceProps } from "./types";

const JobExperience: FC<JobExperienceProps> = ({
  title,
  linkText,
  pagePath,
  jobs,
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
