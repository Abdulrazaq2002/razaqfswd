import React, { useState } from "react";
import { Link } from "react-router-dom";
import HLogo from "../img/hlogo.png";

const linkCss =
  "font-bold text-md hover:text-gray-800 border-b-2 hover:border-gray-800 ";

const active = "text-gray-800 border-gray-800";
const MobileActive = "text-gray-800 border-gray-800 border-b-4";
const mobileNav = `mt-5 font-bold hover:border-b-4 hover:border-gray-800`;
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleActive = (page) => {
    setIsActive(page);
  };

  return (
    <>
      <nav className='flex w-full p-3 sm:text-lg text-xs bg-white border-b border-gray-500'>
        <div className='flex items-center'>
          <img
            src={HLogo}
            alt='Abdul Razaq'
            className='w-10 h-10 rounded-full'
          />
          <label className='ml-2 font-bold text-lg'>Razaq</label>
        </div>
        <ul className='hidden md:flex text-sm justify-center ml-auto gap-8'>
          <NavItem
            label='Home'
            to='/'
            isActive={isActive === "home"}
            handleActive={() => handleActive("home")}
          />
          <NavItem
            label='Know Me'
            to='/know'
            isActive={isActive === "know"}
            handleActive={() => handleActive("know")}
          />
          <NavItem
            label='Skills'
            to='/skill'
            isActive={isActive === "skill"}
            handleActive={() => handleActive("skill")}
          />
          <NavItem
            label='Education'
            to='/education'
            isActive={isActive === "education"}
            handleActive={() => handleActive("education")}
          />
          <NavItem
            label='Projects'
            to='/project'
            isActive={isActive === "project"}
            handleActive={() => handleActive("project")}
          />
          <NavItem
            label='Reach Out'
            to='/reach'
            isActive={isActive === "reach"}
            handleActive={() => handleActive("reach")}
          />
        </ul>
        <button
          className='block md:hidden ml-auto font-bold text-2xl focus:outline-none'
          onClick={handleClick}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}>
          <div className='w-6 h-1 rounded-xl bg-black mb-1'></div>
          <div className='ml-[4px] w-5 h-1 rounded-xl bg-black mb-1'></div>
          <div className='w-6 h-1 bg-black rounded-xl'></div>
        </button>
      </nav>
      {isOpen && (
        <nav
          className={`fixed top-0 right-0 w-1/2 h-full p-5 bg-white border-b border-l border-gray-500 z-50 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}>
          <ul className='flex flex-col text-2xl items-center h-full mt-10'>
            <MobileNavItem
              label='Home'
              to='/'
              isActive={isActive === "home"}
              handleActive={() => handleActive("home")}
              handleClick={handleClick}
            />
            <MobileNavItem
              label='Know Me'
              to='/know'
              isActive={isActive === "know"}
              handleActive={() => handleActive("know")}
              handleClick={handleClick}
            />
            <MobileNavItem
              label='Skills'
              to='/skill'
              isActive={isActive === "skill"}
              handleActive={() => handleActive("skill")}
              handleClick={handleClick}
            />
            <MobileNavItem
              label='Education'
              to='/education'
              isActive={isActive === "education"}
              handleActive={() => handleActive("education")}
              handleClick={handleClick}
            />
            <MobileNavItem
              label='Projects'
              to='/project'
              isActive={isActive === "project"}
              handleActive={() => handleActive("project")}
              handleClick={handleClick}
            />
            <MobileNavItem
              label='Reach Out'
              to='/reach'
              isActive={isActive === "reach"}
              handleActive={() => handleActive("reach")}
              handleClick={handleClick}
            />
          </ul>
        </nav>
      )}
    </>
  );
}

function NavItem({ label, to, isActive, handleActive }) {
  return (
    <li
      className={`${linkCss} ${isActive ? active : ""}`}
      onClick={handleActive}>
      <Link to={to}>{label}</Link>
    </li>
  );
}

function MobileNavItem({ label, to, isActive, handleActive, handleClick }) {
  return (
    <li
      className={`${mobileNav} ${isActive ? MobileActive : ""}`}
      onClick={() => {
        handleActive();
        handleClick();
      }}>
      <Link to={to}>{label}</Link>
    </li>
  );
}
