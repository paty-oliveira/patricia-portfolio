import "../../styles/shared.css";
import "./styles.css";

import { FC } from "react";
import { FaArrowUp } from "react-icons/fa";

import { FooterProps } from "./types";

const Footer: FC<FooterProps> = ({ content }) => {
  const currentYear = new Date().getFullYear();

  const handleOnClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer__button_container">
        <button className="button" onClick={handleOnClick}>
          <FaArrowUp />
          <span>Back to top</span>
        </button>
      </div>
      <p>
        © {currentYear} | {content}
      </p>
    </footer>
  );
};

export default Footer;
