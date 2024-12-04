import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../card";
import { LatestProjectsProps } from "./types";

const LatestProjects: FC<LatestProjectsProps> = ({
  title,
  linkText,
  pagePath,
  projects,
}) => {
  const navigate = useNavigate();

  const handleOnClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="container">
      <div className="section__header flex">
        <h3 className="weight-600">{title}</h3>
        <a className="page_link" href={pagePath}>
          {linkText}
        </a>
      </div>
      <div className="latest_projects__content">
        {projects.map(({ title, description, id }) => (
          <Card
            key={id}
            title={title}
            description={description}
            onClick={() => handleOnClick(id)}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
