import "./styles.css";

import React from "react";

import Header from "@/components/header";
import Introduction from "@/components/introduction";

const Homepage: React.FC = () => {
  return (
    <main className="main-layout">
      <Header />
      <Introduction />
    </main>
  );
};

export default Homepage;
