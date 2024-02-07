//imports data
import projects from '../Data/projects';
const fetchProject = (technology) => {
    const projectsArray = 
        projects.filter((project) => {
            if(!technology)
                return project
            return project.technologyUsed.includes(technology);
        })

    return projectsArray;
    
}

export default fetchProject;
