import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://still-sea-98860.herokuapp.com/projects')
            .then(response => response.json())
            .then(data => setProjects(data))
    })
    return (
        <div className='mt-5 bg-color'>
            <div className="container">
                <div className="row">
                    {
                        projects.map(project => <Project key={project.id} project={project}></Project>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;