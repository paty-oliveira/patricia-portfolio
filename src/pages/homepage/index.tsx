import "./styles.css";

import React from "react";

import Header from "@/components/header";
import Introduction from "@/components/introduction";
import LatestPosts from "@/components/latestPosts";

const Homepage: React.FC = () => {
  return (
    <main className="main-layout">
      <Header />
      <Introduction />
      <LatestPosts />
    </main>
  );
};

export default Homepage;
