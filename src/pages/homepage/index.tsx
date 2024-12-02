import "./styles.css";

import React from "react";

import Header from "@/components/header";
import Introduction from "@/components/introduction";
import JobExperience from "@/components/jobExperience";
import LatestPosts from "@/components/latestPosts";

const Homepage: React.FC = () => {
  return (
    <main className="main-layout">
      <Header />
      <Introduction />
      <LatestPosts />
      <JobExperience />
    </main>
  );
};

export default Homepage;
