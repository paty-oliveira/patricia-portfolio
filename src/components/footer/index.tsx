import "./styles.css";

import { FC } from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer: FC = () => {
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
        <button className="footer__button" onClick={handleOnClick}>
          <FaArrowUp />
          <span>Back to top</span>
        </button>
      </div>
      <p>© {currentYear} | Patrícia Oliveira</p>
    </footer>
  );
};

export default Footer;
