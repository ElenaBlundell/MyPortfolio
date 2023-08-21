import React from 'react'
import '/src/components/Header.css'

export default function Header(){
    return (
            <div>
                <header className="header">
                    <h1 className="logo">Elena Blundell</h1>
                    <nav id="nav">
                        <ul>
                            <li tabIndex="-1"><a href="#about">About</a></li>
                            <li tabIndex="-1"><a href="#tech">Tech stack</a></li>
                            <li tabIndex="-1"><a href="#projects">Projects</a></li>
                            <li tabIndex="-1"><a href="#contacts">Contacts</a></li>
                        </ul>
                    </nav>
                    <div id="nav-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div id="nav-small">
                        <ul>
                            <li tabIndex="-1"><a href="#about">About</a></li>
                            <li tabIndex="-1"><a href="#tech">Tech stack</a></li>
                            <li tabIndex="-1"><a href="#projects">Projects</a></li>
                            <li tabIndex="-1"><a href="#contacts">Contacts</a></li>
                        </ul>
                    </div>
                </header>
           </div>
    )        
}