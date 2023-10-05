import React from 'react'

import { Icon } from 'react-icons-kit'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {envelope} from 'react-icons-kit/fa/envelope'

import '/src/components/footer/Footer.css'

export default function Footer(){

    return (
        <footer className="footer" >
            <div className="wrapper">
                <div className="footer-info">
                    <p>Designed and coded by Elena Blundell</p>
                    <div className="contactLinks">
                        <a 
                            href="https://www.linkedin.com/in/elena-blundell/" 
                            target="_blank" 
                            rel="noreferrer" 
                            style={{ color: '#0D3F67' }} 
                        >
                            <Icon 
                                icon={linkedinSquare}
                                size="1.5em"  
                                className="social-icon"
                            />
                        </a>
                        <a 
                            href="mailto:blundell.elena@gmail.com"
                            target="_blank" 
                            rel="noreferrer" 
                            style={{ color: '#0D3F67' }}
                        >
                            <Icon 
                                icon={envelope}
                                size="1.5em" 
                                className="social-icon" 
                            />
                        </a>
                        <a 
                            href="https://github.com/ElenaBlundell" 
                            target="_blank" 
                            rel="noreferrer" 
                            style={{ color: '#0D3F67' }} 
                        >
                            <Icon 
                                icon={githubSquare}
                                size="1.5em" 
                                className="social-icon" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}