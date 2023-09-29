import React from 'react'
import '/src/components/projects/Projects.css'
import data from '/src/components/projects/projectsData.js'
import ProjectCard from '/src/components/projects/ProjectCard.jsx'

export default function Projects(){

    const projectsCards = data.map(project => {
        <ProjectCard
            key = {project.id}
            {...project}
        />
    })

    return (
        <section id="projects" className="projects">
            <h2>My projects</h2>
            <div className="projects-cards">
                {projectsCards}
            </div>
        </section>
    )
}