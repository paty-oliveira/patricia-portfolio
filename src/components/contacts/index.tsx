import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

import { ContactsProps } from "./types";

const linkContacts = [
  {
    name: "twitter-x",
    link: "#",
  },
  {
    name: "github",
    link: "#",
  },
  {
    name: "linkedin",
    link: "#",
  },
  {
    name: "email",
    link: "markdowns@gmail.com",
  },
];

const Contacts: FC<ContactsProps> = ({ title, content }) => {
  return (
    <section>
      <h3 className="section__header weight-600">{title}</h3>
      <div className="contacts__content">
        <p>{content}</p>
        <div className="contacts__social_media flex">
          {linkContacts.map(({ name, link }, index) => {
            if (index !== linkContacts.length - 1) {
              return (
                <>
                  <a
                    className="contacts__social_media_item"
                    href={link}
                    key={name}
                  >
                    {name}
                  </a>
                  <span
                    key={`${name}-span`}
                    className="contacts__social_media_separator"
                  >
                    /
                  </span>
                </>
              );
            }
            return (
              <a className="contacts__social_media_item" href={link} key={name}>
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
