import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import Card from "../card";
import { LatestPostsProps } from "./types";

const LatestPosts: FC<LatestPostsProps> = ({
  title,
  linkText,
  pagePath,
  posts,
}) => {
  return (
    <section className="container">
      <div className="section__header flex">
        <h3 className="weight-600">{title}</h3>
        <a className="page_link" href={pagePath}>
          {linkText}
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
