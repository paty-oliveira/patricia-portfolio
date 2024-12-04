import "../../styles/shared.css";

import { FC } from "react";
import { Helmet } from "react-helmet";

import Header from "@/components/header";
import Posts from "@/components/posts";
import { cms } from "@/content";
import { seo } from "@/content/seo";

import { groupPostsByYear, sortByYearDesc } from "./utils";

const Blog: FC = () => {
  const { header, blogPage } = cms;
  const { blog: metadata } = seo;

  const postsByYear = groupPostsByYear(blogPage.posts);
  const postsSortedByYear = sortByYearDesc(postsByYear);

  return (
    <main className="main-layout">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name={metadata.name} content={metadata.content} />
      </Helmet>
      <Header content={header.content} />
      <section>
        <h3 className="section__header weight-600">{blogPage.title}</h3>
        <Posts posts={postsSortedByYear} />
      </section>
    </main>
  );
};

export default Blog;
