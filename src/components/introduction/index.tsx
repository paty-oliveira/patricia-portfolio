import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import { cms } from "../../content";

const Introduction: FC = () => {
  const { introduction } = cms.homepage;

  return (
    <section className="container">
      <h3 className="section__header weight-600">
        {introduction.title}&nbsp;<span>👋🏻</span>
      </h3>
      <div className="introduction__content">
        <div className="introduction__text_content">
          {introduction.content.map((text) => (
            <p>{text}</p>
          ))}
        </div>
        <div className="introduction__img_content">
          <img className="my-photo" src="/my-photo.jpeg" alt="my photography" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
