import "./styles.css";

import { FC } from "react";

import { CardProps } from "./types";

const Card: FC<CardProps> = ({ title, description, onClick }) => {
  return (
    <div className="card">
      <div className="card__content" onClick={onClick}>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
      <div className="card__link">{">"}</div>
    </div>
  );
};

export default Card;
