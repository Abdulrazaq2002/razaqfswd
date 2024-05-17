import React from "react";
import Html from "../img/html.png";
import Css from "../img/css.png";
import Js from "../img/javascript.png";
import Rjs from "../img/react.png";
import Vite from "../img/vite.svg";
import Njs from "../img/nodejs.png";
import Ejs from "../img/express.png";
import Ty from "../img/typescript.png";
import Tw from "../img/tailwind.png";
import CL from "../img/c.png";
import Cpp from "../img/c++.png";
import Mdb from "../img/mongodb.png";
import FB from "../img/firebase.png";
import TP from "../img/tally.png";
import Dev from "../img/dev.png";
import { Fade } from "react-reveal";

const skillIcons = [
  { img: Html, title: "HTML" },
  { img: Css, title: "CSS" },
  { img: Js, title: "JavaScript" },
  { img: Ty, title: "TypeScript" },
  { img: Tw, title: "Tailwind CSS" },
  { img: Rjs, title: "React.js" },
  { img: Vite, title: "Vite" },
  { img: Njs, title: "Node.js" },
  { img: Ejs, title: "Express.js" },
  { img: Mdb, title: "MongoDB" },
  { img: FB, title: "Firebase" },
  { img: CL, title: "C" },
  { img: Cpp, title: "C++" },
  { img: TP, title: "Tally" },
];

export default function Skill() {
  return (
    <div className='bg-gradient-to-r from-purple-500 to-indigo-500 min-h-screen flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center mt-14'>
        <img
          src={Dev}
          className='w-20  h-20 rounded-full'
          alt='Developer Icon'
        />
        <h1 className='text-4xl md:text-5xl font-bold text-white border-b-4 border-yellow-400'>
          Skills & <span className='text-yellow-300'>Abilities</span>
        </h1>
      </div>
      <section className='grid grid-cols-2 md:grid-cols-4 gap-8 px-4 py-16'>
        {skillIcons.map((icon, index) => (
          <Fade key={index} bottom cascade>
            <div className='group text-center bg-gray-900 hover:bg-gray-800 shadow-md rounded-lg overflow-hidden'>
              <img
                src={icon.img}
                alt={`Skill ${index + 1}`}
                className='w-full h-40 object-contain transition duration-300 group-hover:scale-105'
              />
              <p className='text-xl text-white font-medium py-4'>
                {icon.title}
              </p>
            </div>
          </Fade>
        ))}
      </section>
    </div>
  );
}
