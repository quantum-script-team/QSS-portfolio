import './App.css'
import SwipeToSlide from "./carrusel/slider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./carrusel/slider.css"

function App() {

  return (
    <>
      <div style={{ padding: "2.5em" }} className='padding'>
        < SwipeToSlide />
      </div>
    </>
  )
}

export default App
