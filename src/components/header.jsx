import React, { useState } from "react";
import { Link } from "react-router-dom";
import HLogo from "../img/hlogo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const linkCss =
    "font-bold sm:text-md text-sm hover:text-gray-800 border-b-2 hover:border-gray-800 ";

  const active = "text-gray-800 border-gray-800";
  const MobileActive = "text-gray-800 border-gray-800 border-b-4";
  const mobileNav = `mt-5 font-bold hover:border-b-4 hover:border-gray-800`;
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleActive = (page) => {
    setIsActive(page);
  };
  return (
    <>
      <nav className='flex w-full p-3 sm:text-lg text-xs bg-white border-b border-gray-500'>
        <img
          src={HLogo}
          alt='Abdul Razaq'
          className='size-8 ml-[10%]  rounded-full '
        />
        <label className='mt-1 ml-1 font-bold text-xl'> Razaq</label>
        {/* for big screen size */}
        <ul className='md:flex hidden text-sm md:justify-center md:ml-[10%]  justify-center gap-8 items-center w-full'>
          <li
            active={isActive}
            className={`${linkCss} ${isActive === "home" ? active : ""}`}
            onClick={() => handleActive("home")}>
            <Link to='/'>Home</Link>
          </li>
          <li
            className={`${linkCss} ${isActive === "know" ? active : ""}`}
            onClick={() => handleActive("know")}>
            <Link to='/know'>Know Me..</Link>
          </li>
          <li
            className={`${linkCss} ${isActive === "skill" ? active : ""}`}
            onClick={() => handleActive("skill")}>
            <Link to='/skill'>Skills</Link>
          </li>
          <li
            className={`${linkCss} ${isActive === "education" ? active : ""}`}
            onClick={() => handleActive("education")}>
            <Link to='/education'>Education</Link>
          </li>
          <li
            className={`${linkCss} ${isActive === "project" ? active : ""}`}
            onClick={() => handleActive("project")}>
            <Link to='/project'>Project's</Link>
          </li>
          <li
            className={`${linkCss} ${isActive === "reach" ? active : ""}`}
            onClick={() => handleActive("reach")}>
            <Link to='/reach'>Reach Out</Link>
          </li>
        </ul>
        {/* Hamburger button */}
      </nav>
      <div className='flex justify-end -mt-14 mr-5 text-5xl'>
        <button className='flex justify-end md:hidden' onClick={handleClick}>
          =
        </button>
      </div>
      {/* for small screen size */}
      {isOpen && (
        <nav
          className={`fixed right-0 top-0 w-[50%] h-full p-5 bg-white border-b border-l border-gray-500 transition duration-1000 ease-in-out ${
            isOpen ? "opacity-100 z-50" : "opacity-0 z-10" // Ensure smooth fade in/out
          }`}>
          <ul className='flex flex-col text-2xl items-center h-full mt-10'>
            <li
              className={`${mobileNav} ${
                isActive === "home" ? MobileActive : ""
              }`}
              onClick={() => handleActive("home")}>
              <Link onClick={handleClick} to='/'>
                Home
              </Link>
            </li>
            <li
              className={`${mobileNav} ${
                isActive === "know" ? MobileActive : ""
              }`}
              onClick={() => handleActive("know")}>
              <Link onClick={handleClick} to='/know'>
                Know me
              </Link>
            </li>
            <li
              className={`${mobileNav} ${
                isActive === "skill" ? MobileActive : ""
              }`}
              onClick={() => handleActive("skill")}>
              <Link onClick={handleClick} to='/skill'>
                Skills
              </Link>
            </li>
            <li
              className={`${mobileNav} ${
                isActive === "education" ? MobileActive : ""
              }`}
              onClick={() => handleActive("education")}>
              <Link onClick={handleClick} to='/education'>
                Education
              </Link>
            </li>
            <li
              className={`${mobileNav} ${
                isActive === "project" ? MobileActive : ""
              }`}
              onClick={() => handleActive("project")}>
              <Link onClick={handleClick} to='/project'>
                Project
              </Link>
            </li>
            <li
              className={`${mobileNav} ${
                isActive === "reach" ? MobileActive : ""
              }`}
              onClick={() => handleActive("reach")}>
              <Link onClick={handleClick} to='/reach'>
                Reach Out
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}
