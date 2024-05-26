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
    <div className=' bg-charcol h-auto'>
      <footer className=' block sm:flex justify-evenly p-5'>
        <div className='sm:w-[50%]'>
          <Fade top>
            <h1 className='text-4xl mb-4 font-bold text-white'>REACH OUT</h1>
          </Fade>
          <Fade bottom>
            <p className='text-left text-white mb-8'>
              My inbox is always open for you, whether you have a question, need
              assistance with work, or simply want to say hi. I'll do my best to
              get back to you.
            </p>
          </Fade>
        </div>
        <div className=''>
          <Fade top>
            <p
              onClick={handleClick}
              className='flex items-center rounded-xl w-36 h-auto p-4 bg-white text-charcol hover:bg-gray-300 transition duration-300 mb-8'>
              <b>Say Hi, Email</b>
            </p>
          </Fade>
          <Fade top>
            <div className='flex gap-6 mb-8'>
              {Social.map((social, index) => (
                <a
                  href={"https://" + social.name}
                  key={index}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transform transition-transform hover:scale-125'>
                  <img src={social.img} alt={social.name} className='w-8 h-8' />
                </a>
              ))}
            </div>
          </Fade>
        </div>
      </footer>
      <Fade bottom>
        <hr />
        <div className='flex justify-center'>
          <p className='text-sm mt-4 text-white items-center'>
            &copy; 2024 Abdul Razaq. All rights reserved.
          </p>
        </div>
      </Fade>
    </div>
  );
}
