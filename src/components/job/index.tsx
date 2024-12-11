import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import { JobProps } from "./types";

const Job: FC<JobProps> = ({
  timePeriod,
  companyName,
  jobTitle,
  description,
}) => {
  return (
    <div>
      <div className="work_card__header">
        <p>{timePeriod}</p>
        <h5 className="weight-600">{companyName}</h5>
        <p>{jobTitle}</p>
      </div>
      <div className="work_card__content">
        {description.map((text) => (
          <p>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default Job;
