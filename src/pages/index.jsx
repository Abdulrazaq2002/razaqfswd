import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";
import { useLocation } from "react-router-dom";
import Insta from "../social/instagram.png";
import Linkedin from "../social/linkedin.png";
import Git from "../social/github.png";
import Brain from "../img/brain.png";

export default function Index({ projectRef, aboutRef }) {
  const location = useLocation();
  const [isActive, setIsActive] = useState(location.hash || "#home");
  const active = "text-red-800";

  useEffect(() => {
    setIsActive(location.hash || "#home");
  }, [location]);

  const handleActive = (hash) => {
    setIsActive(hash);

    scrollToSection(projectRef);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className='flex justify-center items-center h-screen text-charcol'>
      <div className='flex flex-col justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16'>
        <Fade bottom>
          <h1 className='text-3xl sm:text-3xl md:text-4xl mb-4'>
            <b>HEY,</b> I'M <b>ABDUL RAZAQ</b>
          </h1>
          <p className='text-xl sm:text-2xl md:text-3xl mb-4'>
            A Result-Oriented Web Developer building and managing Websites and
            Web Applications that lead to the success of the overall product
          </p>
        </Fade>
        <Fade top>
          <div className='flex flex-col sm:flex-row justify-evenly items-center mt-5 gap-3'>
            <button
              id='project-button'
              className={`${isActive === "#project" ? active : ""}`}
              onClick={() => handleActive("#project")}>
              <h1 className='flex justify-center rounded-2xl w-full border-2 bg-charcol p-3 text-center hover:bg-gray-800 text-gray-200'>
                <b>PROJECT'S</b>
              </h1>
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
}
