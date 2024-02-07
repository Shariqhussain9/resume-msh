//CSS 
import './App.css';

// rrd imports
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import SkillsSet from './Components/SkillsSet/SkillsSet';
import ProjectsComp from './Components/Projects/projectsComp';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className='content'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='skills'>
            <Route index element={<Skills /> }/>
            <Route path='skillsSet/:id' element={<SkillsSet />} />
          </Route>
          <Route path='resume' element={<Resume />} />
          <Route path='works' element={<ProjectsComp />} />
          <Route path='contact' element={<Contact />} />

        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
