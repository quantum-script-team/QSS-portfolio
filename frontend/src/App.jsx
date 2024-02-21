import './App.css'
import ProjectsSection from './components/ProjectsSection.jsx'

import Projects from './pages/Projects'
import Header from './components/Header/Header'
function App() {

  return (
    <>
    <ProjectsSection/>
      <Header/>
      <Projects></Projects>      
    </>
  )
}

export default App
