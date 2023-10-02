import React from "react"

export default function ProjectCard(props){

    const mainTech = props.tech.map(tech => <li key={tech}>{tech}</li>)

    return (
            <div className="project-card">
                <img src={props.img}></img>
                <div className="project-info">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <ul className="main-tech">
                        {mainTech}
                    </ul>
                    <div className="project-links">
                        <a href={props.githubRepo}>View Code</a>
                        <a href={props.liveLink}>Live Preview</a>
                     </div>
                </div>
            </div>
        )
} 