import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import Card from "../card";

const projects = [
  {
    title: "Astro Nano",
    description: "Minimal portfolio and blog",
    key: "astro_nano",
  },
  {
    title: "Astro Sphere",
    description: "Portfolio and blog",
    key: "astro_sphere",
  },
];

const LatestProjects: FC = () => {
  return (
    <section className="container">
      <div className="latest_projects__header flex">
        <h3 className="weight-600">Lastest Projects</h3>
        <a className="page_link">See all projects</a>
      </div>
      <div className="latest_projects__content">
        {projects.map(({ title, description, key }) => (
          <Card key={key} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default LatestProjects;
