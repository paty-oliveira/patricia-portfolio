import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import Post from "./Post";

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
      <div className="latest_posts__header flex">
        <h3 className="weight-600">Latest Posts</h3>
        <a className="latest_post__link">See all posts</a>
      </div>
      <div className="latest_posts__content">
        {posts.map(({ title, description, key }) => (
          <Post key={key} title={title} description={description} />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
