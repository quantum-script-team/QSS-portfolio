import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import AboutUs from './pages/AboutUs';
import Projects from './pages/Inicio';

function App() {

  return (
    <div className='asd'>
    <Router>
        <Routes>
          <Route path='/' element={<Inicio/>} />
          <Route path='/AboutUs' element={<AboutUs/>} />
          <Route path='/Projects' element={<Projects/>} />
          {/* <Route path='/*' element={<element/>} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default App
