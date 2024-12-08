import "../../styles/shared.css";

import { FC } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/header";
import { cms } from "@/content";
import { seo } from "@/content/seo";

const Projects: FC = () => {
  const { header } = cms;
  const { projects: metadata } = seo;

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
    </main>
  );
};

export default Projects;
