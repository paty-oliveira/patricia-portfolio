import "../../styles/shared.css";

import React from "react";
import { Helmet } from "react-helmet";

import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import JobExperience from "@/components/jobExperience";
import LatestPosts from "@/components/latestPosts";
import LatestProjects from "@/components/latestProjects";
import { cms } from "@/content";
import { seo } from "@/content/seo";
import { pagesConfig } from "@/routes/routePages";

const Homepage: React.FC = () => {
  const { header, footer } = cms;
  const { introduction, latestPosts, jobExperience, latestProjects, contacts } =
    cms.homepage;
  const {
    blog: blogPath,
    work: workPath,
    projects: projectsPath,
  } = pagesConfig;
  const { homepage: metadata } = seo;

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
      <Introduction
        title={introduction.title}
        content={introduction.content}
        photoPath={introduction.photoPath}
      />
      <LatestPosts
        title={latestPosts.title}
        linkText={latestPosts.linkText}
        pagePath={blogPath}
        posts={latestPosts.posts}
      />
      <JobExperience
        title={jobExperience.title}
        linkText={jobExperience.linkText}
        pagePath={workPath}
        jobs={jobExperience.jobs}
      />
      <LatestProjects
        title={latestProjects.title}
        linkText={latestProjects.linkText}
        pagePath={projectsPath}
        projects={latestProjects.projects}
      />
      <Contacts
        title={contacts.title}
        content={contacts.content}
        links={contacts.links}
      />
      <Footer content={footer.content} />
    </main>
  );
};

export default Homepage;
