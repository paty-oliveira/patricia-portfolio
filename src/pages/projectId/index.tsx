import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { Helmet } from "react-helmet";
import { FaAngleLeft } from "react-icons/fa6";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "@/components/header";
import { cms } from "@/content";
import { seo } from "@/content/seo";
import { useProjectDocs } from "@/hooks/useProjectDocs";

const Project: FC = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const { header, projectsPage } = cms;
  const { projects: metadata } = seo;
  const project = projectsPage.projects.find(
    (project) => project.id === projectId
  );

  const { projectDocs, error } = useProjectDocs(
    project?.repoOwner || "",
    project?.repoName || ""
  );

  const handleOnClick = () => {
    navigate(-1);
  };

  if (!project) {
    return (
      <main className="main-layout">
        <Helmet>
          <title>{metadata.title}</title>
        </Helmet>
        <Header content={header.content} />
        <section>
          <div className="projects__button__container">
            <button className="button" onClick={handleOnClick}>
              <FaAngleLeft />
              <span>Back to projects</span>
            </button>
          </div>
          <div className="projects__content">
            <p>No project found!</p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={project.description} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <div className="projects__button__container">
          <button className="button" onClick={handleOnClick}>
            <FaAngleLeft />
            <span>Back to projects</span>
          </button>
        </div>
        <div className="projects__header">
          <p>{project.publicationDate}</p>
          <h3>{project.title}</h3>
          <div className="projects__header_links">
            {project.demoLink ? (
              <>
                <a href={project.demoLink} className="link__item">
                  demo
                </a>
                <span className="link__item_separator">/</span>
              </>
            ) : null}
            <a href={project.repoLink} className="link__item">
              repo
            </a>
          </div>
        </div>
        <div className="projects__content">
          {error.length === 0 && <ReactMarkdown>{projectDocs}</ReactMarkdown>}
        </div>
      </section>
    </main>
  );
};

export default Project;
