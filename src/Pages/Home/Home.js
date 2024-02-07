//CSS
import './Home.css'

//Components
import Banner from '../../Components/Banner/Banner'
import About from '../../Components/About/About'
import Skills from '../../Components/Skills/Skills'
import ProjectsComp from '../../Components/Projects/projectsComp'
import Contact from '../../Components/Contact/Contact'

export default function Home() {
  return (
    <div className='home-div'>
        <Banner />
        <About />
        <Skills />
        <ProjectsComp />
        <Contact />
    </div>
  )
}
