import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

import Card from "@/components/card";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cms } from "@/content";
import { seo } from "@/content/seo";

const Projects: FC = () => {
  const navigate = useNavigate();

  const { header, projectsPage, footer } = cms;
  const { projects: metadata } = seo;

  const handleOnClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
      <section className="projects__section">
        <h3 className="section__header weight-600">{projectsPage.title}</h3>
        <div className="projects__content">
          {projectsPage.projects.map(({ title, description, id }) => (
            <Card
              key={id}
              title={title}
              description={description}
              onClick={() => handleOnClick(id)}
            />
          ))}
        </div>
      </section>
      <Footer content={footer.content} />
    </main>
  );
};

export default Projects;
