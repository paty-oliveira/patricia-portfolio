import "./styles.css";
import "../../styles/shared.css";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };

  return (
    <header className="flex">
      <div className="logo" onClick={handleOnClick}>
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
