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
import Dev from "../img/dev.png";
import { Fade } from "react-reveal";

const skillIcons = [
  { img: Html, title: "Html" },
  { img: Css, title: "CSS" },
  { img: Js, title: "JavaScript" },
  { img: Ty, title: "TypeScript" },
  { img: Tw, title: "TailWind" },
  { img: Rjs, title: "ReactJs" },
  { img: Vite, title: "Vite" },
  { img: Njs, title: "NodeJs" },
  { img: Ejs, title: "ExpressJs" },
  { img: Mdb, title: "MongoDb" },
  { img: FB, title: "Firebase" },
  { img: CL, title: "C" },
  { img: Cpp, title: "C++" },
];

export default function Skill() {
  return (
    <>
      <div className=' bg-gradient-to-r from-purple-500 to-indigo-500'>
        <div className='flex justify-center items-center '>
          <img
            src={Dev}
            className='sm:w-20 sm:mt-14 sm:h-20 w-14 rounded-full '
            alt='Developer Icon'
          />
          <h1 className='sm:text-5xl sm:mt-14 text-4xl font-bold text-white underline'>
            Skills & <span className='text-yellow-300'>Abilities</span>
          </h1>
        </div>
        <section className='flex justify-center items-center px-4 py-16'>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8 '>
            {skillIcons.map((icon, index) => (
              <Fade key={index} bottom cascade>
                <div className='skill-card group text-center bg-black shadow-md rounded-lg overflow-hidden'>
                  <img
                    src={icon.img}
                    alt={`Skill ${index + 1}`}
                    className='w-full mt-1 h-40 object-contain transition duration-300 group-hover:scale-110'
                  />
                  <p className='text-xl bg-black text-white font-medium py-4 px-2'>
                    {icon.title}
                  </p>
                </div>
              </Fade>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
