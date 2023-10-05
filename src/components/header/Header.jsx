import React, {useState} from 'react'
// import { Icon } from 'react-icons-kit'
// import {menu} from 'react-icons-kit/feather/menu'
// import {x} from 'react-icons-kit/feather/x'
import '/src/components/header/Header.css'



export default function Header(){

    const [isOpen, setIsOpen] = useState(false)

    const handleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (<div className="header-wrapper">
            <header className={isOpen ? "header expanded" : "header"}>
                <h1 className="logo">Elena Blundell</h1>
                <nav className="nav">
                    <div className={isOpen ? "menu-icon open" : "menu-icon"} onClick={handleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#tech">Tech stack</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </nav>
            </header>
            </div>
    )        
}