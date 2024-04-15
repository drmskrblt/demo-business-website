import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";

import { FaBars, FaTimes } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import LogoImage from "../assets/NextVisionLOGO.png";

const Navigation = () => {
  const [expandBurger, setExpandBurger] = useState(false);

  const toggleMenu = () => {
    setExpandBurger((prev) => !prev);
  };

  const closeMenu = () => {
    setExpandBurger(false);
  };

  const STYLE = {
    // nav
    nav: `flex items-center justify-between w-full p-2 px-4`,
    // navigation on mobile
    navMobile: `h-[60px] w-full flex items-center justify-between md:hidden`,
    // burger menu icon
    burgerIcon: `text-3xl z-20 text-white transition-transform duration-300`,
    // show mobile menu on burger click
    mobileMenu: `absolute w-full top-[76px] left-0 bg-[#121212] divide-y divide-slate-600 z-20`,
    // font on collapsed mobile menu
    mobileLink: `block p-6 text-white px-8 text-lg md:hidden`,
    mobileLinkActive: `block p-6 bg-white text-black px-8 font-bold text-lg md:hidden`,
    // navigation on desktop
    navDesktop: `h-[80px] hidden md:flex justify-center items-center`,
    // navigation desktop text
    desktopLink: `block p-4 text-[#2b4a64] font-bold ml-6`,
  };

  const navtransition = useTransition(expandBurger, {
    from: { transform: "translateY(-100%)" }, opacit: 0,
    enter: { transform: "translateY(0%)" }, opacity: 1,
    leave: { transform: "translateY(-200%)", opacity: 0 },
    config: { tension: 1000, friction: 60 },
  });




  return (
    <nav className={STYLE.nav}>
      {/* Mobile View */}
      <div className={STYLE.navMobile}>
        {/* Burger Icon */}
        <div
          className={`${STYLE.burgerIcon} ${
            expandBurger ? "rotate-90" : "rotate-0"
          }`}
          onClick={toggleMenu}
        >
          {!expandBurger ? <FaBars /> : <FaTimes />}
        </div>

        {/* Logo Centered */}
        <div className="">
        <Link href="/" className="text-white text-4xl font-bold">NextVision-IT</Link>
          {/* <NavLink to="/">
            <img src={LogoImage} alt="logo of the company mobile" />
          </NavLink> */}
        </div>

        {/* Location Icon */}
        <div className="text-3xl z-20 text-white">
          {/* <IoLocationOutline /> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {navtransition(
        (style, item) =>
          item && (
            <animated.ul style={style} className={STYLE.mobileMenu}>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? STYLE.mobileLinkActive : STYLE.mobileLink
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? STYLE.mobileLinkActive : STYLE.mobileLink
                  }
                  onClick={closeMenu}
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/produkte"
                  className={({ isActive }) =>
                    isActive ? STYLE.mobileLinkActive : STYLE.mobileLink
                  }
                  onClick={closeMenu}
                >
                  Produkte
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ueber-uns"
                  className={({ isActive }) =>
                    isActive ? STYLE.mobileLinkActive : STYLE.mobileLink
                  }
                  onClick={closeMenu}
                >
                  Über uns
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/kontakt"
                  className={({ isActive }) =>
                    isActive ? STYLE.mobileLinkActive : STYLE.mobileLink
                  }
                  onClick={closeMenu}
                >
                  Kontakt
                </NavLink>
              </li>
            </animated.ul>
          )
      )}

      {/* Desktop View */}
      <div className={STYLE.navDesktop}>
        <div className="pl-14">
          <img
            src={LogoImage}
            alt="logo of the company desktop"
            className="h-20"
          />
        </div>
        <ul className="flex">
          <li className={STYLE.desktopLink}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className={STYLE.desktopLink}>
            <NavLink to="/service">Service</NavLink>
          </li>
          <li className={STYLE.desktopLink}>
            <NavLink to="/produkte">Produkte</NavLink>
          </li>
          <li className={STYLE.desktopLink}>
            <NavLink to="/ueber-uns">Über uns</NavLink>
          </li>
          <li className={STYLE.desktopLink}>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
