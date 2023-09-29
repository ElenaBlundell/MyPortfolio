import React from 'react'
import data from '/src/components/tech/techData.jsx'
import TechCard from '/src/components/tech/TechCard.jsx'

import '/src/components/tech/Tech.css'


export default function Tech(){
    
    const techCards = data.map(card => {
         return (
            <TechCard
                key = {card.id}
                {...card}
            />
         )
    })
   
    return (
        <section id="tech" className="tech">
            <h2>My tech stack</h2>
            <div className="techCards">
                {techCards}
            </div>
           </section>
    )
}