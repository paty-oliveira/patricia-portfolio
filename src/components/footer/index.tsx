import { FC } from "react";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} | Patrícia Oliveira</p>
    </footer>
  );
};

export default Footer;
