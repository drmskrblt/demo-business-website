import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTransition, animated } from "@react-spring/web";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [expandBurger, setExpandBurger] = useState(false);

  const toggleMenu = () => setExpandBurger((prev) => !prev);
  const closeMenu = () => setExpandBurger(false);

  const navTransition = useTransition(expandBurger, {
    from: { transform: "translateY(-100%)" },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" },
    config: { tension: 220, friction: 26 },
  });

  return (
    <nav className="h-[80px] w-full bg-[#161616] flex justify-center items-center p-2 px-6 text-white">
      <div className="flex justify-between w-full items-center md:w-1/2 md:ml-6">
        <div
          className="md:hidden text-3xl cursor-pointer z-20"
          onClick={toggleMenu}
        >
          {expandBurger ? <FaTimes /> : <FaBars />}
        </div>
        <div className="mx-auto md:mx-0 md:block">
          <Link to="/" className="text-4xl font-bold">
            NextVision-IT
          </Link>
        </div>
      </div>

      {navTransition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="absolute w-full top-[76px] left-0 bg-[#121212] z-20 h-screen"
            >
              <ul className="flex flex-col p-6 gap-8 md:hidden">
                <NavItem to="/" label="Home" onClick={closeMenu} />
                <NavItem to="/service" label="Service" onClick={closeMenu} />
                <NavItem to="/produkte" label="Produkte" onClick={closeMenu} />
                <NavItem to="/ueber-uns" label="Über uns" onClick={closeMenu} />
                <NavItem to="/kontakt" label="Kontakt" onClick={closeMenu} />
              </ul>
            </animated.div>
          )
      )}

      <div className="hidden md:flex h-[80px] w-full justify-center items-center gap-6">
        <DesktopLink to="/" label="Home" />
        <DesktopLink to="/service" label="Service" />
        <DesktopLink to="/produkte" label="Produkte" />
        <DesktopLink to="/ueber-uns" label="Über uns" />
        <DesktopLink to="/kontakt" label="Kontakt" />
      </div>
    </nav>
  );
};

// Handling <NavItem> => mobile container links
const NavItem = ({ to, label, onClick }) => (
  <li className="text-white text-lg">
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block p-2 bg-white text-black font-bold text-lg rounded-lg"
          : ""
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  </li>
);

// Handling <DesktopLink> => desktop links
const DesktopLink = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      isActive
        ? "font-extrabold text-xl bg-white text-black rounded-lg p-2 py-1"
        : "font-bold text-xl text-white hover:text-white p-2"
    }
  >
    {label}
  </NavLink>
);

export default Navigation;
