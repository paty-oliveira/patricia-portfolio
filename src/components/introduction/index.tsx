import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

const Introduction: FC = () => {
  return (
    <section>
      <h3 className="introduction__title weight-600">
        Hi, I'm Patrícia&nbsp;<span>👋🏻</span>
      </h3>
      <div className="introduction__content">
        <div className="introduction__text_content">
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
            egestas semper. Aenean ultricies mi vitae est. Mauris placerat
            eleifend leo.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
        <div className="introduction__img_content">
          <img
            className="my-photo"
            src="/public/my-photo.jpeg"
            alt="my photography"
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
