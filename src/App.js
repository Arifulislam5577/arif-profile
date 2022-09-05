import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hire from "./components/Hire";
import Icons from "./components/Icons";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Icons />} />
          <Route path="about" element={<About />} />
          <Route path="hire" element={<Hire />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  );
}
