import React from "react";
import { Fade } from "react-reveal";
import Insta from "../social/instagram.png";
import Linkedin from "../social/linkedin.png";
import Git from "../social/github.png";

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
    <div className='items-center mt-10 sm:mt-20 sm:ml-[20%] sm:mr-[20%]'>
      <Fade top>
        <h1 className='text-2xl sm:text-3xl items-center border-b-4 border-black'>
          Get In Touch
        </h1>
      </Fade>
      <Fade bottom>
        <p className='font-bold text-gray-700 text-sm sm:text-base'>
          My inbox is always open for you, whether you have a question, need
          assistance with work, or simply want to say hi. I'll do my best to get
          back to you.
        </p>
      </Fade>
      <Fade top>
        <button
          onClick={handleClick}
          className='items-center font-bold rounded-xl sm:p-2 w-32 mt-4 bg-black text-white hover:bg-gray-800'>
          Say Hi
        </button>
      </Fade>
      <Fade top>
        <section className='flex gap-3 mt-5'>
          {Social.map((social, index) => (
            <a
              href={"https://" + social.name}
              key={index}
              target='_blank'
              rel='noopener noreferrer'>
              <img
                key={index}
                src={social.img}
                alt=''
                className='rounded-full w-12 h-12 hover:w-12 hover:h-12 transition-transform duration-300 transform hover:rotate-45'
              />
            </a>
          ))}
        </section>
      </Fade>
    </div>
  );
}
