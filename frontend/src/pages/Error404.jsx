import '../styles/error404/error404.css'
import error from '/img/error404/error404.svg'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="error404">
      <div className='error404__container--img'>
        <img className='error404__img' src={error} alt="error404" />
      </div>
      <div className='error404__container--description'>
        <p className='error404__text'>Lo siento No podemos encontrar la página que estás buscando.</p>
        <Link to="/" className='error404__btn'>Volver</Link>
      </div>
    </div>
  )
}

export default Error404
