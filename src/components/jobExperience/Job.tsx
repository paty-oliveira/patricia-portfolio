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
        <h6 className="weight-600">{companyName}</h6>
        <p>{jobTitle}</p>
      </div>
      <div className="work_card__content">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Job;
