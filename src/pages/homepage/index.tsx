import "./styles.css";

import React from "react";

import Contacts from "@/components/contacts";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import JobExperience from "@/components/jobExperience";
import LatestPosts from "@/components/latestPosts";
import LatestProjects from "@/components/latestProjects";

const Homepage: React.FC = () => {
  return (
    <main className="main-layout">
      <Header />
      <Introduction />
      <LatestPosts />
      <JobExperience />
      <LatestProjects />
      <Contacts />
      <Footer />
    </main>
  );
};

export default Homepage;
