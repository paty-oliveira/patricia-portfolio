import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import { IntroductionProps } from "./types";

const Introduction: FC<IntroductionProps> = ({ title, content, photoPath }) => {
  return (
    <section className="container">
      <h3 className="section__header weight-600">
        {title}&nbsp;<span>👋🏻</span>
      </h3>
      <div className="introduction__content">
        <div className="introduction__text_content">
          {content.map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className="introduction__img_content">
          <img className="my-photo" src={photoPath} alt="my photography" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
