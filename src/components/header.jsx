import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HLogo from "../img/hlogo.png";

const linkCss = "font-bold text-charcol text-md hover:text-blue-500 mt-[10px]";
const active = "text-sky-500";
const mobileNav = "mt-5 font-bold text-white";
const mobileActive = "text-black underline";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(location.pathname);

  useEffect(() => {
    setIsActive(location.hash || "#home");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 10;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          const currentId = section.getAttribute("id");
          setIsActive(`#${currentId}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset =
        section.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className='flex w-full p-3 fixed z-50 top-0 sm:text-lg text-xs bg-gray-100 border-b border-charcol'>
        <div className='flex items-center'>
          <img
            src={HLogo}
            alt='Abdul Razaq'
            className='w-10 h-10 rounded-full'
          />
          <label className='ml-2 font-bold text-charcol text-lg'>Razaq</label>
        </div>
        <ul className='hidden md:flex text-sm justify-center ml-auto gap-8'>
          <NavItem
            label='Home'
            to='home'
            isActive={isActive === "#home"}
            handleActive={() => setIsActive("#home")}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label='Know Me'
            to='know'
            isActive={isActive === "#know"}
            handleActive={() => setIsActive("#know")}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label='Skills'
            to='skill'
            isActive={isActive === "#skill"}
            handleActive={() => setIsActive("#skill")}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label='Education'
            to='education'
            isActive={isActive === "#education"}
            handleActive={() => setIsActive("#education")}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label='Projects'
            to='project'
            isActive={isActive === "#project"}
            handleActive={() => setIsActive("#project")}
            scrollToSection={scrollToSection}
          />
          <NavItem
            label='Reach Out'
            to='reach'
            isActive={isActive === "#reach"}
            handleActive={() => setIsActive("#reach")}
            scrollToSection={scrollToSection}
          />
        </ul>
        <button
          className='block md:hidden ml-auto font-bold text-2xl focus:outline-none'
          onClick={handleClick}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}>
          <div className='ml-[4px] w-5 h-1 rounded-xl bg-charcol mb-1'></div>
          <div className='w-6 h-1 rounded-xl bg-charcol mb-1'></div>
        </button>
      </nav>
      {isOpen && (
        <nav
          className={`fixed top-0 left-0 w-1/2 h-full p-5 bg-charcol z-50 transition-opacity duration-500 ease-in-out ${
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}>
          <ul className='flex flex-col text-2xl items-center h-full mt-10'>
            <MobileNavItem
              label='Home'
              to='home'
              isActive={isActive === "#home"}
              handleActive={() => setIsActive("#home")}
              handleClick={handleClick}
              scrollToSection={scrollToSection}
            />
            <MobileNavItem
              label='Know Me'
              to='know'
              isActive={isActive === "#know"}
              handleActive={() => setIsActive("#know")}
              handleClick={handleClick}
              scrollToSection={scrollToSection}
            />
            <MobileNavItem
              label='Skills'
              to='skill'
              isActive={isActive === "#skill"}
              handleActive={() => setIsActive("#skill")}
              handleClick={handleClick}
              scrollToSection={scrollToSection}
            />
            <MobileNavItem
              label='Education'
              to='education'
              isActive={isActive === "#education"}
              handleActive={() => setIsActive("#education")}
              handleClick={handleClick}
              scrollToSection={scrollToSection}
            />
            <MobileNavItem
              label='Projects'
              to='project'
              isActive={isActive === "#project"}
              handleActive={() => setIsActive("#project")}
              handleClick={handleClick}
              scrollToSection={scrollToSection}
            />
            <MobileNavItem
              label='Reach Out'
              to='reach'
              isActive={isActive === "#reach"}
              handleActive={() => setIsActive("#reach")}
              handleClick={handleClick}
              scrollToSection={scrollToSection}
            />
          </ul>
        </nav>
      )}
    </>
  );
}

function NavItem({ label, to, isActive, handleActive, scrollToSection }) {
  return (
    <li
      className={`${linkCss} ${isActive ? active : ""}`}
      onClick={() => {
        handleActive();
        scrollToSection(to);
      }}>
      <Link to={`#${to}`}>{label}</Link>
    </li>
  );
}

function MobileNavItem({
  label,
  to,
  isActive,
  handleActive,
  handleClick,
  scrollToSection,
}) {
  return (
    <li
      className={`${mobileNav} ${isActive ? mobileActive : ""}`}
      onClick={() => {
        handleActive();
        handleClick();
        scrollToSection(to);
      }}>
      <Link to={`#${to}`}>{label}</Link>
    </li>
  );
}
