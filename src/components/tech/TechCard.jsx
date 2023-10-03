import React from 'react'

export default function TechCard(props){
    if (props.type === "icon") {
        return (
            <div className="tech-card" tabIndex="0">
                <a 
                href={props.techUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                tabIndex="-1">
                    {props.techIcon}
                    <p>{props.name}</p>
                </a>
            </div>
        )
    } else if (props.type === "img"){
        return (
            <div className="tech-card" tabIndex="0">
                <a href={props.techUrl}
                target="_blank" 
                rel="noopener noreferrer"
                tabIndex="-1">
                    <img src={props.techIcon} className="icon" alt={props.name + "icon"} />
                    <p>{props.name}</p>
                </a>
            </div>
        )
    }
}