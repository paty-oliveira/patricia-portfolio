import "../../styles/shared.css";

import React from "react";

import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import JobExperience from "@/components/jobExperience";
import LatestPosts from "@/components/latestPosts";
import LatestProjects from "@/components/latestProjects";
import { cms } from "@/content";
import { pagesConfig } from "@/routes/routePages";

const Homepage: React.FC = () => {
  const {
    introduction,
    latestPosts,
    jobExperience,
    latestProjects,
    contacts,
    footer,
  } = cms.homepage;
  const {
    blog: blogPath,
    work: workPath,
    projects: projectsPath,
  } = pagesConfig;

  return (
    <main className="main-layout">
      <Header />
      <Introduction
        title={introduction.title}
        content={introduction.content}
        photoPath={introduction.photoPath}
      />
      <LatestPosts
        title={latestPosts.title}
        linkText={latestPosts.linkText}
        pagePath={blogPath}
      />
      <JobExperience
        title={jobExperience.title}
        linkText={jobExperience.linkText}
        pagePath={workPath}
      />
      <LatestProjects
        title={latestProjects.title}
        linkText={latestProjects.linkText}
        pagePath={projectsPath}
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
