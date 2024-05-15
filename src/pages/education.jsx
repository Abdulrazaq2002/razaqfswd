import React from "react";
import School from "../img/school.jpg";
import Junior from "../img/jrclg.jpg";
import Degree from "../img/ugclg.png";
import Logo from "../img/hlogo.png";
import Ugcap from "../img/ugcap.png";
import Fade, { Slide } from "react-reveal";

export default function Education() {
  const education = [
    {
      inst: "Hyderabad Mission High School",
      img: School,
      location: "Shakar Gunj, Hyderabad",
      year: "March-2019",
    },
    {
      inst: "Hayaath Junior College",
      img: Junior,
      location: "Shalibanda, Hyderabad",
      year: "June-2019 - March-2021",
    },
    {
      inst: "OSM Degree College",
      img: Degree,
      location: "Moghalpura, Hyderabad",
      year: "August-2021 - July-2024",
    },
    {
      inst: "Self Taught, YT, Google",
      img: Logo,
      location: "My Laptop",
      year: "Mid 2020 - Now",
    },
  ];
  return (
    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen'>
      <div className='flex justify-center items-center py-8'>
        <img
          src={Ugcap}
          className='w-16 sm:w-20 mr-2 sm:mr-4'
          alt='Graduation Cap'
        />
        <h1 className='text-3xl sm:text-4xl font-bold text-white'>
          My <span className='text-yellow-400'>Education</span>
        </h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        {education.map((edu, index) => (
          <div className='w-full sm:w-1/2 px-4 mb-8' key={index}>
            <Fade bottom>
              <section className='flex items-center bg-white shadow-md rounded-lg p-4'>
                <img
                  src={edu.img}
                  alt=''
                  className='w-24 sm:w-32 h-24 sm:h-32 object-contain rounded-md shadow-md mr-4'
                />
                <div>
                  <p className='text-lg font-semibold'>{edu.inst}</p>
                  <p className='text-sm'>{edu.location}</p>
                  <p className='text-sm'>{edu.year}</p>
                </div>
              </section>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
