import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ar from "../img/AbdulRazaq.jpg";
import Resume from "../img/resume.pdf";
import { Fade, Slide } from "react-reveal";
import Skill from "./skill";

export default function About() {
  const place = "Hyderabad, India";

  return (
    <div className='bg-gray-100 h-screen'>
      <Slide right>
        <div className='flex justify-center items-center mt-40 '>
          <h1 className='text-4xl font-bold text-charcol border-b-4 border-charcol'>
            ABOUT ME
          </h1>
        </div>
      </Slide>

      <Fade bottom>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 p-5 sm:mt-10 mt-0 justify-evenly'>
          <div className='hidden md:inline'>
            <img
              src={Ar}
              alt='Abdul Razaq - Full Stack Web Developer'
              className='rounded-lg shadow-md w-72 md:w-auto h-80 md:h-96 object-cover'
            />
          </div>

          <div className='flex flex-col justify-center items-start'>
            <p className='text-lg font-bold text-justify md:text-left text-charcol'>
              Hey, I'm Abdul Razaq, a passionate Full Stack Web Developer based
              in {place}. I specialize in the MERN stack, with a strong focus on
              React.js and vanilla JavaScript. I graduated with a BCom degree
              from Osmania University in June 2024. Explore my portfolio to see
              my latest projects, where I tackle complex challenges with
              innovative solutions. Let's connect and discuss how we can
              collaborate on your next big idea!
            </p>
            <div className='mt-6 text-center md:text-left'>
              <a
                href={Resume}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-charcol text-gray-200 px-6 py-3 rounded-md hover:bg-gray-800 font-bold'>
                View Resume
              </a>
            </div>
          </div>
        </section>
      </Fade>
      {/* <Skill /> */}
    </div>
  );
}
