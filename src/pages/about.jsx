import React, { useState } from "react";
import { Link } from "react-router-dom";
import Ar from "../img/AbdulRazaq.jpg";
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
    } finally {
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    }
  };

  return (
    <>
      <Slide right>
        <div className='flex mt-14 justify-center items-center'>
          <h1 className='text-5xl font-bold'>
            About<span className='text-blue-300'>_Me.</span>
          </h1>
        </div>
      </Slide>

      <Fade bottom>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-0 p-5 sm:mt-10 mt-0'>
          <img
            src={Ar}
            alt='Abdul Razaq - Full Stack Web Developer'
            className='rounded-lg shadow-md w-full md:w-auto h-56 md:h-60 md:ml-[25%] object-contain  transition-transform hover:-rotate-3'
          />
          <div className='flex flex-col justify-center items-start md:w-[100%]'>
            <p className='text-lg font-bold text-justify md:text-left'>
              Hey, I'm Abdul Razaq a passionate Full Stack Web Developer based
              in {place}. I specialize in the MERN stack, with a strong focus on
              React.js and vanilla JavaScript. I am a BCom Graduate in June 2024
              from Osmanina University.
              <br /> Explore my portfolio to{" "}
              <Link to='/project' className='border-b-2 border-black'>
                see my latest projects
              </Link>
              , where I tackle complex challenges with innovative solutions.
              Let's connect and discuss how we can collaborate on your next big
              idea!
            </p>

            <p className='mt-4 text-base font-bold text-right md:text-left'>
              Cheers,
              <br />
              Abdul Razaq
            </p>
          </div>
        </section>
      </Fade>
      <Fade top>
        <div className='flex justify-center items-center p-5 border rounded-xl border-gray-300'>
          <span className='mr-4'>
            <p>
              <b>Email:</b> <b className='text-blue-500'>{email}</b>
            </p>
          </span>
          <span onClick={handleCopy} className='cursor-pointer'>
            <b
              className={`border-b border-gray-300 text ${
                copied ? "copied" : ""
              }`}>
              {copied ? "Copied!" : "Copy"}
            </b>
          </span>
        </div>
      </Fade>
    </>
  );
}
