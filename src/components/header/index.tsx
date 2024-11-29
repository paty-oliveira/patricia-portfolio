import "./styles.css";
import "../../styles/shared.css";

import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="flex">
      <div>
        <h5 className="weight-600">Patrícia Oliveira</h5>
      </div>
      <nav className="flex">
        <a className="nav__item" href="/">
          blog
        </a>
        <span className="nav__item_separator">/</span>
        <a className="nav__item" href="/">
          work
        </a>
        <span className="nav__item_separator">/</span>
        <a className="nav__item" href="/">
          projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
