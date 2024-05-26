import React, { useRef } from "react";
import Index from "./index";
import About from "./about";
import Projects from "./projects";
import Skill from "./skill";
import { Slide } from "react-reveal";
import Education from "./education";
import Reach from "./reach";

export default function Home() {
  const indexRef = useRef(null);
  const aboutRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const educationRef = useRef(null);
  const reachRef = useRef(null);

  return (
    <>
      <div
        ref={indexRef}
        id='home'
        className='border-b-2 border-charcol border-opacity-10'>
        <Index />
      </div>
      <div
        ref={aboutRef}
        id='know'
        className='border-b-2 border-charcol border-opacity-10'>
        <About />
      </div>
      <div
        ref={skillRef}
        id='skill'
        className='border-b-2 border-charcol border-opacity-10'>
        <Skill />
      </div>
      <div
        ref={educationRef}
        id='education'
        className='border-b-2 border-charcol border-opacity-10 '>
        <Education />
      </div>
      <div
        ref={projectRef}
        id='project'
        className='border-b-2 border-charcol border-opacity-10'>
        <Projects />
      </div>
      <div
        ref={reachRef}
        id='reach'
        className='border-b-2 border-charcol border-opacity-10'>
        <Reach />
      </div>
    </>
  );
}
