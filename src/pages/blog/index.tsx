import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/header";
import Posts from "@/components/posts";
import { cms } from "@/content";
import { seo } from "@/content/seo";

import { groupPostsByYear } from "./utils";

const Blog: FC = () => {
  const { header, blog } = cms;
  const { blog: metadata } = seo;

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <h3 className="section__header weight-600">{blog.title}</h3>
        <Posts posts={groupPostsByYear(blog.posts)} />
      </section>
    </main>
  );
};

export default Blog;
