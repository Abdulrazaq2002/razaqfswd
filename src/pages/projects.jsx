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
      description: "Realtime chat-app created using MERN and Socket.io",
    },
    {
      name: "Book Your Trip - ReactJS",
      img: BMT,
      src: "https://abdulrazaq2002.github.io/Book-Your-Trip/home",
      description: "An online traveling booking web app",
    },
    {
      name: "Pictures Upload App - MERN",
      img: Urud,
      src: "https://urud-app.onrender.com/",
      description: "A CRUD functionality app with image upload feature",
    },
    {
      name: "Car Rental - ReactJS",
      img: CR,
      src: "https://abdulrazaq2002.github.io/car-rental-app/home",
      description: "An app for booking or renting cars",
    },
    {
      name: "Share Quotes - MERN",
      img: Crud,
      src: "https://crud-app-9dhi.onrender.com/",
      description: "A CRUD functionality app for sharing quotes",
    },
    {
      name: "E-Commerce - ReactJS",
      img: EC,
      src: "https://abdulrazaq2002.github.io/Fashion-Shopping/home",
      description: "An E-Commerce app",
    },
  ];
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen'>
      <div className='flex flex-col items-center justify-center py-8'>
        <img
          src={ProIcon}
          className='w-14 sm:w-18 mb-4 sm:mb-6 rounded-full'
          alt='Projects Icon'
        />
        <h1 className='text-3xl sm:text-4xl font-bold text-white  border-b-4 border-yellow-400'>
          My <span className='text-yellow-400'>Projects</span>
        </h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        {Projects.map((project, index) => (
          <div className='w-full md:w-1/2 px-4 mb-8' key={index}>
            <Fade bottom>
              <section className='bg-white shadow-md rounded-lg p-4'>
                <img
                  src={project.img}
                  alt={project.name}
                  className='w-full h-48 object-cover rounded-md shadow-md mb-4'
                />
                <div>
                  <p className='text-xl font-semibold mb-2'>{project.name}</p>
                  <p className='text-lg mb-4'>{project.description}</p>
                  <button className='text-sm bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800'>
                    <a
                      href={project.src}
                      target='_blank'
                      rel='noopener noreferrer'>
                      View
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
