import React, { useEffect, useState } from "react";
import { Fade, Slide } from "react-reveal";
import Insta from "../social/instagram.png";
import Linkedin from "../social/linkedin.png";
import Git from "../social/github.png";
import Brain from "../img/brain.png";
import { Link } from "react-router-dom";
export default function Home() {
  const roles = ["Front-End", "Back-End", "MERN"];
  const [selected, setSelected] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isActive, setIsActive] = useState("skill");
  const active = "text-gray-800 border-gray-800";

  const handleActive = (page) => {
    setIsActive(page);
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingIndex < roles[selected].length) {
        setTypedText((prev) => prev + roles[selected][typingIndex]);
        setTypingIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setSelected((prev) => (prev + 1) % roles.length);
          setTypedText("");
          setTypingIndex(0);
        }, 3000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [selected, typingIndex]);

  return (
    <div className='flex justify-center items-center mt-16 -ml-[15%] md:-ml-[16%]'>
      <div className='flex flex-col justify-center text-left '>
        <Fade bottom>
          <h1 className='sm:text-6xl text-4xl font-bold mb-4'>Hey There,</h1>
        </Fade>
        <Slide right>
          <h1 className='sm:text-6xl text-4xl'>
            I'm <b className='text-blue-500'>Abdul Razaq</b>
          </h1>
        </Slide>
        <Slide left>
          <h3 className='sm:text-4xl text-2xl mt-4'>
            I am Into <b className='text-red-800'>{typedText}|</b>
          </h3>
        </Slide>
        <Fade top>
          <div className='items-center mt-3 '>
            <Link
              to='/skill'
              className={`${isActive === "skill" ? active : ""}`}
              onClick={() => handleActive("skill")}>
              <h1 className=' flex justify-center rounded-2xl peer w-[50%] border-4  border-black p-3  text-center hover:text-gray-800 hover:bg-gray-100 hover:border-gray-800'>
                <b>Skills </b>
                <img src={Brain} className='ml-5 mt-1 w-5 h-5' />
              </h1>
            </Link>
          </div>
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
    </div>
  );
}
