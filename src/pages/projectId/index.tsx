import "../../styles/shared.css";

import { FC } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import Header from "@/components/header";
import { cms } from "@/content";
import { seo } from "@/content/seo";

const Project: FC = () => {
  const { projectId } = useParams();
  const { header, projectsPage } = cms;
  const { projects: metadata } = seo;

  const project = projectsPage.projects.find(
    (project) => project.id === projectId
  );

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={project?.description} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <p>Content about the project: {projectId}</p>
      </section>
    </main>
  );
};

export default Project;
