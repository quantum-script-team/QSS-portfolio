import '../../styles/technologies/technologies.css'

const Technology = ({technologyData}) => {

  return (
    <div className='technology__container'>
      <img className='technology__logo' src={`/img/technologies/${technologyData.logo}`} alt={technologyData.name}/>
    </div>
  )
}

export default Technology