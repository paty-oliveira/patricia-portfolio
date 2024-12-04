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
  const handleOnClick = (link: string) => {
    window.open(link, "_blank", "noreferrer,noopener");
  };

  return (
    <section className="container">
      <div className="section__header flex">
        <h3 className="weight-600">{title}</h3>
        <a className="page_link" href={pagePath}>
          {linkText}
        </a>
      </div>
      <div className="latest_posts__content">
        {posts.map(({ title, description, link }, index) => (
          <Card
            key={index}
            title={title}
            description={description}
            onClick={() => handleOnClick(link)}
          />
        ))}
      </div>
    </section>
  );
};

export default LatestPosts;
