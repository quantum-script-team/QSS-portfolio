import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App
