import React from "react";
import { Fade } from "react-reveal";
import Insta from "../social/instagram.png";
import Linkedin from "../social/linkedin.png";
import Git from "../social/github.png";
import EmailIcon from "../social/email.png"; // Add an email icon image

export default function Reach() {
  const email = "razaq.sharaaz@gmail.com";
  const Social = [
    {
      img: Insta,
      name: "www.instagram.com/abdul_razzaq292/",
    },
    { img: Git, name: "github.com/Abdulrazaq2002" },
    {
      img: Linkedin,
      name: "www.linkedin.com/in/abdul-razaq-a89038287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ];

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className='flex flex-col items-center mt-10 sm:mt-20 sm:mx-auto sm:w-[80%]'>
      <Fade top>
        <h1 className='text-2xl sm:text-3xl border-b-4 border-black'>
          Get In Touch
        </h1>
      </Fade>
      <Fade bottom>
        <p className='font-bold text-gray-700 text-sm sm:text-base mt-4 text-center'>
          My inbox is always open for you, whether you have a question, need
          assistance with work, or simply want to say hi. I'll do my best to get
          back to you.
        </p>
      </Fade>
      <Fade top>
        <button
          onClick={handleClick}
          className='font-bold flex rounded-lg py-2 px-6 mt-4 bg-black text-white hover:bg-gray-800 focus:outline-none transition duration-300'>
          <img
            src={EmailIcon}
            className=' bg-white object-cover w-7 h-6 mr-2'
            alt='Email'
          />
          Say Hi
        </button>
      </Fade>
      <Fade top>
        <div className='flex gap-3 mt-5'>
          {Social.map((social, index) => (
            <a
              href={"https://" + social.name}
              key={index}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                src={social.img}
                alt=''
                className='rounded-full w-12 h-12 hover:w-12 hover:h-12 transition-transform duration-300 transform hover:rotate-45'
              />
            </a>
          ))}
        </div>
      </Fade>
    </div>
  );
}
