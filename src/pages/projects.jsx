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
        "The web app offers real-time text-based communication with a user-friendly interface. Features include message threading and emoji support. It prioritizes security and privacy, ensuring a reliable and enjoyable experience for both casual and professional conversations.",
    },
    {
      name: "Book Your Trip - ReactJS",
      img: BMT,
      src: "https://abdulrazaq2002.github.io/Book-Your-Trip/home",
      description:
        "Experience seamless trip planning with Book Your Trip. This user-friendly platform offers easy navigation and customizable profiles for personalized travel arrangements. Embrace hassle-free booking and discover your next adventure with confidence.",
    },
    {
      name: "Pictures Upload App - MERN",
      img: Urud,
      src: "https://urud-app.onrender.com/",
      description:
        "Connect with others effortlessly using Urud This real-time communication app features a clean interface and robust security measures, ensuring smooth interactions for both personal and professional use.",
    },
    {
      name: "Car Rental - ReactJS",
      img: CR,
      src: "https://abdulrazaq2002.github.io/car-rental-app/home",
      description:
        "Explore Car Rental App for convenient car rental services. With its intuitive design and comprehensive features, booking your next ride has never been easier. Enjoy reliable transportation options tailored to your needs.",
    },
    {
      name: "Share Quotes - MERN",
      img: Crud,
      src: "https://crud-app-9dhi.onrender.com/",
      description:
        "Manage your data efficiently with CRUD App This web app simplifies the process of creating, reading, updating, and deleting information, offering a streamlined solution for database management tasks.",
    },
    {
      name: "E-Commerce - ReactJS",
      img: EC,
      src: "https://abdulrazaq2002.github.io/Fashion-Shopping/home",
      description:
        "Elevate your style with Fashion Shopping This sleek platform combines a user-friendly interface with a wide selection of fashion items, providing an enjoyable shopping experience for fashion enthusiasts.",
    },
  ];
  return (
    <div className='bg-gary-200 min-h-screen  '>
      <div className='flex flex-row items-center justify-center py-8'>
        <h1 className='text-3xl sm:text-4xl font-bold text-charcol border-b-4 border-charcol'>
          MY PROJECTS
        </h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        {Projects.map((project, index) => (
          <div className='w-full md:w-1/2 px-4 mb-8' key={index}>
            <Fade bottom>
              <section className='bg-gray-100 shadow-md rounded-lg'>
                <img
                  src={project.img}
                  alt={project.name}
                  className='w-full h-48 object-contain mb-4'
                />
                <div>
                  <p className='text-xl font-semibold mb-2  text-charcol'>
                    {project.name}
                  </p>
                  <p className='text-lg mb-4  text-charcol'>
                    {project.description}
                  </p>
                  <button className='text-sm w-full bg-charcol text-gray-200 py-2 px-4 font-bold hover:bg-gray-800'>
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
