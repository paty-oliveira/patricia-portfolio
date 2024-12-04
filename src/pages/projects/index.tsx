import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { Helmet } from "react-helmet";

import Card from "@/components/card";
import Header from "@/components/header";
import { cms } from "@/content";
import { seo } from "@/content/seo";

const Projects: FC = () => {
  const { header, projectsPage } = cms;
  const { projects: metadata } = seo;

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <h3 className="section__header weight-600">{projectsPage.title}</h3>
        <div className="projects__content">
          {projectsPage.projects.map(({ title, description, key }) => (
            <Card
              key={key}
              title={title}
              description={description}
              onClick={() => {
                console.log("clicking");
              }}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Projects;
