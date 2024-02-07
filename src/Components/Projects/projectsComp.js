//CSS 
import './projectsComp.css';

//imports
import { useEffect, useState } from 'react';

//Helpers
import fetchProject from '../../Helpers/Helper';

const ProjectsComp = ({skill}) => {
    const [ technology, setTechnology ] = useState(skill? '' : skill);
    const [ projects, setProjects ] = useState([]);

    useEffect(() => {
        setProjects(fetchProject(technology));
    }, [technology]);

    return (
        <div className='projects-div'>
            <h3 className='projects-heading'>Projects</h3>
            <div className='filter-div'> 
                <span>Technology:</span>
                <select 
                    name="technology" 
                    className='select'
                    onChange={e => setTechnology(e.target.value)}
                    value={skill}
                >
                    <option default value=''>All</option>
                    <option value="HTML">HTLM</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="Node.js">Nodejs</option>
                    <option value="React">ReactJs</option>
                </select>
            </div>
            <div className='cards-div'>
            {projects.map((project) => {
                return (
                    <div className='card' key={project.name}>
                    <ul className='projects-list'>
                        <li className='projects-list_item project-heading'>
                            Name : {project.name}
                        </li>
                        <li className='projects-list_item'>
                           Technology Used :  {project.technologyUsed}
                        </li>
                        <li className='projects-list_item'>
                            description : {project.description}
                        </li>
                        <li className='projects-list_item'>
                            from  {project.startDate} to {project.endDate}
                        </li>
                        <li className='projects-list_item'>
                            Team Members : {project.teamMembers}
                        </li>
                        <li className='projects-list_item'>
                            URL : {project.url}
                        </li>
                    </ul>
                    </div>
                )
            })}
        </div>
        </div>
    )
}

export default ProjectsComp;
