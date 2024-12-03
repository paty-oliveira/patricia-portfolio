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

const Homepage: React.FC = () => {
  const { introduction } = cms.homepage;

  return (
    <main className="main-layout">
      <Header />
      <Introduction
        title={introduction.title}
        content={introduction.content}
        photoPath={introduction.photoPath}
      />
      <LatestPosts />
      <JobExperience />
      <LatestProjects />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Homepage;
