import "./styles.css";

import { FC } from "react";

import Card from "@/components/card";

import { PostsProps } from "./types";

const Posts: FC<PostsProps> = ({ posts }) => {
  const handleOnClick = (link: string) => {
    window.open(link, "_blank", "noreferrer,noopener");
  };

  return (
    <div className="blog__content">
      {Object.entries(posts).map(([year, post]) => {
        return (
          <>
            <h5 className="blog__content_year">{year}</h5>
            <div className="blog__content_posts">
              {post.map(({ title, description, link }) => (
                <Card
                  title={title}
                  description={description}
                  onClick={() => handleOnClick(link)}
                />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
