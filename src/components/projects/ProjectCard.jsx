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
                    <div className="links-block">
                        <a 
                            className="btn" 
                            href={props.githubRepo}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            View Code
                        </a>
                        <a 
                            className="btn" 
                            href={props.liveLink}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Live Preview
                        </a>
                     </div>
                </div>
            </div>
        )
} 