import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import { pagesConfig } from "@/routes/routePages";

import Card from "../card";

const posts = [
  {
    title: "Getting started",
    description: "Hit the ground running.",
    key: "getting_started",
  },
  {
    title: "Blog Collection",
    description: "How to add posts to your blog.",
    key: "blog_collection",
  },
  {
    title: "Projects Collection",
    description: "How to add projects to your portfolio.",
    key: "projects_collection",
  },
];

const LatestPosts: FC = () => {
  return (
    <section className="container">
      <div className="section__header flex">
        <h3 className="weight-600">Latest Posts</h3>
        <a className="page_link" href={pagesConfig.blog}>
          See all posts
        </a>
      </div>
      <div className="latest_posts__content">
        {posts.map(({ title, description, key }) => (
          <Card key={key} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
