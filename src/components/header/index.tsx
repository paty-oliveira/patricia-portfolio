import "./styles.css";
import "../../styles/shared.css";

import { FC } from "react";
import { useNavigate } from "react-router-dom";

const navigationLinks = [
  {
    name: "blog",
    path: "/",
  },
  {
    name: "work",
    path: "/",
  },
  {
    name: "projects",
    path: "/",
  },
];

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
        {navigationLinks.map(({ name, path }, index) => {
          if (index !== navigationLinks.length - 1) {
            return (
              <>
                <a className="nav__item" href={path} key={name}>
                  {name}
                </a>
                <span key={`${name}-span`} className="nav__item_separator">
                  /
                </span>
              </>
            );
          }
          return (
            <a className="nav__item" href={path} key={name}>
              {name}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Header;
