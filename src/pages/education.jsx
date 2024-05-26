import React from "react";
import School from "../img/school.jpg";
import Junior from "../img/jrclg.jpg";
import Degree from "../img/ugclg.png";
import Logo from "../img/hlogo.png";
import Reactimg from "../img/reactimg.png";
import Nodeimg from "../img/nodeimg.png";
import Reactjs from "../img/reactjs.pdf";
import Nodejs from "../img/nodejs.pdf";
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

  const cetificate = [
    {
      inst: "Hacker Rank ",
      img: Reactimg,
      src: Reactjs,
      subject: "Front-End In ReactJs",
    },
    {
      inst: "Hacker Rank",
      img: Nodeimg,
      src: Nodejs,
      subject: "Hands On With Nodejs & Expressjs",
    },
  ];
  return (
    <div className='min-h-screen'>
      <div className='sm:py-14 py-5'>
        <div className='max-w-6xl mx-auto flex justify-center items-center'>
          <h1 className='text-3xl border-b-4 border-charcol sm:text-4xl font-bold text-charcol'>
            EDUCATION & CERTIFICATION
          </h1>
        </div>
      </div>
      <div className='max-w-6xl mx-auto mb-20'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {education.map((edu, index) => (
            <div
              className='border-b-2 border-l-2 border-charcol border-opacity-10 p-4'
              key={index}>
              <Fade bottom>
                <img
                  src={edu.img}
                  alt=''
                  className='w-full h-48 object-cover rounded-md mb-4'
                />
                <div>
                  <p className='text-lg font-semibold text-charcol mb-2'>
                    {edu.inst}
                  </p>
                  <p className='text-sm text-charcol mb-2'>{edu.location}</p>
                  <p className='text-sm text-charcol'>{edu.year}</p>
                </div>
              </Fade>
            </div>
          ))}
          {cetificate.map((certifi, index) => (
            <div
              className='border-b-2 border-l-2 border-charcol border-opacity-10 p-4'
              key={index}>
              <Fade bottom>
                <img
                  src={certifi.img}
                  alt=''
                  className='w-full h-48 object-cover rounded-md mb-4'
                />
                <div>
                  <p className='text-lg font-semibold text-charcol mb-2'>
                    {certifi.inst}
                  </p>
                  <p className='text-sm text-charcol'>{certifi.subject}</p>
                  <a
                    href={certifi.src}
                    target='_blank'
                    className='text-sm text-charcol mb-2 underline font-bold'>
                    VIEW
                  </a>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
