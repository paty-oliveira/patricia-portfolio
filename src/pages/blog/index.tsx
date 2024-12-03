import "../../styles/shared.css";

import { FC } from "react";

import Header from "@/components/header";
import { cms } from "@/content";

const Blog: FC = () => {
  const { header } = cms;

  return (
    <main className="main-layout">
      <Header content={header.content} />
    </main>
  );
};

export default Blog;
