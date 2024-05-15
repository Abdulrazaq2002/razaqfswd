import React from "react";
import Chatapp from "../img/chatapp.png";
import Urud from "../img/urudapp.png";
import Crud from "../img/sharequotes.png";
import BMT from "../img/bookmytrip.png";
import CR from "../img/carrental.png";
import EC from "../img/ecommerce.png";
import ProIcon from "../img/projects.jpg";

import { Fade } from "react-reveal";

export default function Projects() {
  const Projects = [
    {
      name: "Chat App - MERN",
      img: Chatapp,
      src: "https://chatapp-y2rw.onrender.com/",
      description:
        "Realtime chat-app which created by using MERN and Sockit.io ",
    },
    {
      name: "Book Your Trip - ReachJS",
      img: BMT,
      src: "https://abdulrazaq2002.github.io/Book-Your-Trip/home",
      description: "This is an online traveling book web app",
    },
    {
      name: "Pictures Upload App - MERN",
      img: Urud,
      src: "https://urud-app.onrender.com/",
      description:
        "This a CRUD functionality app with feature of uploading images ",
    },
    {
      name: "Car Rental - ReactJS",
      img: CR,
      src: "https://abdulrazaq2002.github.io/car-rental-app/home",
      description: "Thi is an app to book car or rent a car",
    },
    {
      name: "Share Quotes - MERN",
      img: Crud,
      src: "https://crud-app-9dhi.onrender.com/",
      description:
        "This a CRUD functionality app with feature of uploading images ",
    },
    {
      name: "E-Commerce - ReactJS",
      img: EC,
      src: "https://abdulrazaq2002.github.io/Fashion-Shopping/home",
      description: "This a E-Commerce app",
    },
  ];
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen'>
      <div className='flex justify-center items-center py-8'>
        <img
          src={ProIcon}
          className='w-14 sm:w-18 mr-2 sm:mr-4 mt-10 rounded-full'
          alt='Graduation Cap'
        />
        <h1 className='text-3xl sm:text-4xl font-bold mt-10 text-white'>
          My <span className='text-yellow-400'>Projects</span>
        </h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        {Projects.map((project, index) => (
          <div className='w-full md:w-1/2 px-4 mb-8' key={index}>
            <Fade bottom>
              <section className='block items-center bg-white shadow-md rounded-lg p-4'>
                <img
                  src={project.img}
                  alt=''
                  className='w-full h-full object-contain rounded-md shadow-md mr-4'
                />
                <div>
                  <p className='text-xl font-semibold'>{project.name}</p>
                  <p className='text-lg'>{project.description}</p>
                  <button className='text-sm bg-black p-3 w-20 text-white hover:bg-gray-800 rounded-lg'>
                    <a
                      href={project.src}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <b>View</b>
                    </a>
                  </button>
                </div>
              </section>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
