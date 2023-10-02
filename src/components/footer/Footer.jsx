import React from 'react'

import { Icon } from 'react-icons-kit'
import {linkedinSquare} from 'react-icons-kit/fa/linkedinSquare'
import {githubSquare} from 'react-icons-kit/fa/githubSquare'
import {envelope} from 'react-icons-kit/fa/envelope'
import {heartO} from 'react-icons-kit/fa/heartO'

import '/src/components/footer/Footer.css'

export default function Footer(){

    return (
        <div className="footer" >
            <div className="wrapper">
                <p>Designed and coded with <span style={{ color: '#6B48FF' }}> <Icon icon={heartO} /> </span>  by Elena Blundell.</p>
                    <div className="contactLinks">
                        <a 
                            href="https://www.linkedin.com/in/elena-blundell/" 
                            target="_blank" 
                            rel="noreferrer" 
                            style={{ color: '#0D3F67' }} 
                            >
                            <Icon size="1.5em" icon={linkedinSquare} color= '#0D3F67'/>
                        </a>
                        <a 
                            href="https://github.com/ElenaBlundell" 
                            target="_blank" 
                            rel="noreferrer" 
                            style={{ color: '#0D3F67' }} 
                        >
                            <Icon size="1.5em" icon={githubSquare}/>
                        </a>
                        <a 
                            href="mailto:blundell.elena@gmail.com"
                            target="_blank" 
                            rel="noreferrer" 
                            style={{ color: '#0D3F67' }}
                        >
                            <Icon size="1.6em" icon={envelope} />
                        </a>
                    </div>
            </div>
        </div>
    )
}