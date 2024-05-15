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
        <Route path='/' element={<Home />} />
        <Route path='/skill' element={<Skill />} />
        <Route path='/know' element={<About />} />
        <Route path='/reach' element={<Reach />} />
        <Route path='/education' element={<Education />} />
        <Route path='/project' element={<Projects />} />
      </Routes>
    </Router>
  );
}
