import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { Helmet } from "react-helmet";
import { FaAngleLeft } from "react-icons/fa6";
import Markdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "@/components/header";
import { cms } from "@/content";
import { seo } from "@/content/seo";

const Project: FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const { header, projectsPage } = cms;
  const { projects: metadata } = seo;

  const project = projectsPage.projects.find(
    (project) => project.id === projectId
  );

  const handleOnClick = () => {
    navigate(-1);
  };

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={project?.description} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <div className="projects__button__container">
          <button className="button" onClick={handleOnClick}>
            <FaAngleLeft />
            <span>Back to projects</span>
          </button>
        </div>
        <div>
          <p>Date Here</p>
          <p>{project?.title}</p>
          <p>Quick links</p>
        </div>
        <div className="projects__content">
          <Markdown>{project.content}</Markdown>
        </div>
      </section>
    </main>
  );
};

export default Project;
