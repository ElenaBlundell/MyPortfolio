import React from 'react'
import '/src/components/Header.css'

export default function Header(){
    return (
            <div>
                <header className="header">
                    <h1 className="logo">Elena Blundell</h1>
                    <nav id="nav">
                        <ul>
                            <li tabindex="-1"><a href="#about">About</a></li>
                            <li tabindex="-1"><a href="#tech">Tech stack</a></li>
                            <li tabindex="-1"><a href="#projects">Projects</a></li>
                            <li tabindex="-1"><a href="#contacts">Contacts</a></li>
                        </ul>
                    </nav> 
                </header>
           </div>
    )        
}