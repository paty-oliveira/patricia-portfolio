import "./styles.css";

import { FC } from "react";

const navigationItems = [
  { name: "Home", key: "home", path: "/" },
  { name: "About", key: "about", path: "/" },
  { name: "Services", key: "services", path: "/" },
  { name: "Portfolio", key: "portfolio", path: "/" },
  { name: "Blog", key: "blog", path: "/" },
  { name: "Contacts", key: "contacts", path: "/" },
];

const Sidebar: FC = () => {
  return (
    <section className="left">
      <h3>Sidebar</h3>
      <div className="container">
        {navigationItems.map(({ key, name, path }) => (
          <li key={key}>
            <a href={path}>{name}</a>
          </li>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
