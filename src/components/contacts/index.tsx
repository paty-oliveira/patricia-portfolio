import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";

const contacts = [
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

const Contacts: FC = () => {
  return (
    <section className=" container">
      <h3 className="section__header weight-600">Let's Connect</h3>
      <div className="contacts__content">
        <p>
          If you want to get in touch with me about something or just to say hi,
          reach out on social media or send me an email.
        </p>
        <div className="contacts__social_media flex">
          {contacts.map(({ name, link }, index) => {
            if (index !== contacts.length - 1) {
              return (
                <>
                  <a
                    className="contacts__social_media_item"
                    href={link}
                    key={name}
                  >
                    {name}
                  </a>
                  <span className="contacts__social_media_separator">/</span>
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
