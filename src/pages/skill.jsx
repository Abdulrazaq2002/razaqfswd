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
  { title: "HTML" },
  { title: "CSS" },
  { title: "Tailwind CSS" },
  { title: "JavaScript" },
  { title: "TypeScript" },
  { title: "React.js" },
  { title: "Vite" },
  { title: "Node.js" },
  { title: "Express.js" },
  { title: "MongoDB" },
  { title: " Responsive Design " },
  { title: "Firebase" },
  { title: "C" },
  { title: "C++" },
  { title: "Tally" },
];

export default function Skill() {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center mt-14'>
        <h1 className='text-4xl md:text-5xl font-bold text-charcol border-b-2 border-charcol'>
          SKILLS & ABILITIES
        </h1>
      </div>
      <section className='grid grid-cols-3 md:grid-cols-4 gap-8 px-4 py-16'>
        {skillIcons.map((icon, index) => (
          <Fade key={index} bottom cascade>
            <div className='group text-center w-auto bg-gray-200 hover:bg-gray-800  text-charcol hover:text-gray-200 p-3 shadow-md rounded-lg overflow-hidden'>
              <p className='sm:text-xl text-sm font-medium py-4'>
                {icon.title}
              </p>
            </div>
          </Fade>
        ))}
      </section>
    </div>
  );
}
