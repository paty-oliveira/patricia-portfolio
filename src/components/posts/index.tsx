import "../../styles/shared.css";
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
      {[...posts.keys()].map((year) => (
        <>
          <h5 className="blog__content_year weight-600">{year}</h5>
          <div className="blog__content_posts">
            {posts
              .get(year)
              ?.map(({ title, description, link }, index) => (
                <Card
                  key={index}
                  title={title}
                  description={description}
                  onClick={() => handleOnClick(link)}
                />
              ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Posts;
