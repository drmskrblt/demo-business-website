import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const STYLE = {
    container: "bg-[#161616] bottom-0 text-center text-white py-4 w-full z-10",
    button: `m-4 font-bold cursor-pointer md:hidden`,
    ul: `flex flex-col py-4 md:flex-row md:justify-center`,
    li: `p-2`,
    trademark: ``,
  };

  return (
    <footer>
      <div className={STYLE.container}>
        <span onClick={scrollToTop} className={STYLE.button}>
          Nach oben
        </span>
        <ul className={STYLE.ul}>
          <li className={STYLE.li}>Kontakt</li>
          <li className={STYLE.li}>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
          <li className={STYLE.li}>
            <Link to="/impressum">Impressum</Link>
          </li>
        </ul>
        <p className={STYLE.trademark}>© Business Website</p>
      </div>
    </footer>
  );
};

export default Footer;
