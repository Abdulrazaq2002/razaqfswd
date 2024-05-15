import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import Skill from "./pages/skill";
import About from "./pages/about";
import Reach from "./pages/reach";
import Education from "./pages/education";
import Projects from "./pages/projects";
export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/razaqfswd' element={<Home />} />
        <Route path='/razaqfswd/skill' element={<Skill />} />
        <Route path='/razaqfswd/know' element={<About />} />
        <Route path='/razaqfswd/reach' element={<Reach />} />
        <Route path='/razaqfswd/education' element={<Education />} />
        <Route path='/razaqfswd/project' element={<Projects />} />
      </Routes>
    </Router>
  );
}
