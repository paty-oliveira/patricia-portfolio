import "./styles.css";

import { FC } from "react";

import { PostProps } from "./types";

const Post: FC<PostProps> = ({ title, description }) => {
  return (
    <div className="post_card">
      <div className="post_card__content">
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className="post_card__link">{">"}</div>
    </div>
  );
};

export default Post;
