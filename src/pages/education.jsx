import React from "react";
import School from "../img/school.jpg";
import Junior from "../img/jrclg.jpg";
import Degree from "../img/ugclg.png";
import Logo from "../img/hlogo.png";
import Ugcap from "../img/ugcap.png";
import { Fade } from "react-reveal";

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
    <div className='min-h-screen'>
      <div className='sm:py-14 py-5'>
        <div className='max-w-6xl mx-auto flex justify-center items-center'>
          <img
            src={Ugcap}
            className='w-16 sm:w-20 mr-2 sm:mr-4'
            alt='Graduation Cap'
          />
          <h1 className='text-3xl border-b-4 border-yellow-400 sm:text-4xl font-bold text-blue-900'>
            My <span className='text-yellow-400'>Education</span>
          </h1>
        </div>
      </div>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {education.map((edu, index) => (
            <div className='bg-white rounded-lg shadow-md p-6' key={index}>
              <Fade bottom>
                <img
                  src={edu.img}
                  alt=''
                  className='w-full h-48 object-cover rounded-md mb-4'
                />
                <div>
                  <p className='text-lg font-semibold mb-2'>{edu.inst}</p>
                  <p className='text-sm text-gray-600 mb-2'>{edu.location}</p>
                  <p className='text-sm text-gray-600'>{edu.year}</p>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
