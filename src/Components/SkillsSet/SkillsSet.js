// CSS 
import './SkillsSet.css';

//rrd imports
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Data
import SkillsArray from '../../Data/Skills';

//helpers
import fetchProject from '../../Helpers/Helper';

// Components
import ProjectsComp from '../Projects/projectsComp';

const SkillsSet = () => {
    const {id} = useParams();
    const [skill, setSkill] = useState([]);
    const [projects, setProjects] = useState([]);

    useEffect(() => {  
         SkillsArray.map((category)=> {
            category.skills.map((skill) => {
                if(skill.id === id){
                    setSkill(skill);
                    setProjects(fetchProject(skill.name));
                }
            });
        });


    }, []);
    return (
        <div className='skill-div'>
            <span className='skill-heading'>{skill.name}!!</span>
            <span className='skill-prof'>{skill.proficiency}</span>
            <span className='skill-des'>{skill.description}</span>
            <div className='skill-projects'>
               <ProjectsComp projects={projects} skill={skill.name}/>
            </div>
        </div>
        
    );
}

export default SkillsSet;
