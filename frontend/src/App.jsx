import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer/Footer";
// import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
