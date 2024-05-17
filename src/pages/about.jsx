import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ar from "../img/AbdulRazaq.jpg";
import Resume from "../img/resume.pdf";
import { Fade, Slide } from "react-reveal";

export default function About() {
  const email = "razaq.sharaaz@gmail.com";
  const place = "Hyderabad, India";
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy text:", err);
      setCopied(false); // Reset copied state in case of failure
    } finally {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <div className='bg-gray-100 min-h-screen'>
      <Slide right>
        <div className='flex justify-center items-center '>
          <h1 className='text-5xl font-bold text-blue-900 border-b-4 border-yellow-400'>
            About<span className='text-yellow-500'> Me</span>
          </h1>
        </div>
      </Slide>

      <Fade bottom>
        <section className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-2 p-5 sm:mt-10 mt-0'>
          <div className='hidden md:inline'></div>
          <div>
            <img
              src={Ar}
              alt='Abdul Razaq - Full Stack Web Developer'
              className='rounded-lg shadow-md w-full md:w-auto h-80 md:h-96 object-cover'
            />
          </div>

          <div className='flex flex-col justify-center items-start'>
            <p className='text-lg font-bold text-justify md:text-left text-gray-800'>
              Hey, I'm Abdul Razaq, a passionate Full Stack Web Developer based
              in {place}. I specialize in the MERN stack, with a strong focus on
              React.js and vanilla JavaScript. I graduated with a BCom degree
              from Osmania University in June 2024.
            </p>
            <p className='mt-4 text-base font-semibold text-right md:text-left text-gray-700'>
              Explore my portfolio to{" "}
              <Link to='/project' className='text-blue-600 hover:underline'>
                see my latest projects
              </Link>
              , where I tackle complex challenges with innovative solutions.
              Let's connect and discuss how we can collaborate on your next big
              idea!
            </p>
            <div className='mt-6 text-center md:text-left'>
              <a
                href={Resume}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 font-semibold'>
                View Resume
              </a>
            </div>
          </div>
        </section>
      </Fade>
      <Fade top>
        <div className='flex justify-center items-center p-5 border rounded-xl border-gray-300'>
          <span className='mr-4'>
            <p className='text-gray-800'>
              <b>Email:</b> <span className='text-blue-500'>{email}</span>
            </p>
          </span>
          <span onClick={handleCopy} className='cursor-pointer'>
            <b
              className={`border-b border-gray-300 text-gray-800 ${
                copied ? "copied" : ""
              }`}>
              {copied ? "Copied!" : "Copy"}
            </b>
          </span>
        </div>
      </Fade>
    </div>
  );
}
