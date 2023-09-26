import React from 'react'
// import { Icon } from 'react-icons-kit'
// import {menu} from 'react-icons-kit/feather/menu'
// import {x} from 'react-icons-kit/feather/x'
import '/src/components/Header.css'


export default function Header(){
    return (
            <div>
                <header className="header">
                    <h1 className="logo">Elena Blundell</h1>
                    <nav className="nav">
                        <ul>
                            <li tabIndex="-1"><a href="#about">About</a></li>
                            <li tabIndex="-1"><a href="#tech">Tech stack</a></li>
                            <li tabIndex="-1"><a href="#projects">Projects</a></li>
                            <li tabIndex="-1"><a href="#contacts">Contacts</a></li>
                        </ul>
                        <div className="menu-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        {/* <Icon icon={menu} size={32} /> */}
                        </div>
                    </nav>
                   
                </header>
           </div>
    )        
}