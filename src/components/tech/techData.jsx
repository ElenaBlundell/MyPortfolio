import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5} from '@fortawesome/free-brands-svg-icons'
import {faCss3Alt} from '@fortawesome/free-brands-svg-icons'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faNpm} from '@fortawesome/free-brands-svg-icons'
import {faBootstrap} from '@fortawesome/free-brands-svg-icons'
import {faFigma} from '@fortawesome/free-brands-svg-icons'

// import netlify from '../public/icons/netlify.svg';


export default  [
    {
        id: 1,
        name: "HTML",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faHtml5} style={{color: "#f2f4f6",}} />,
        techUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },

    {
        id: 2,
        name: "JavaScript",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faCss3Alt} style={{color: "#f2f4f6",}} />,
        techUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    },

    {
        id: 3,
        name: "React.js",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faReact} style={{color: "#f2f4f6",}} />,
        techUrl: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started#hello_react"
    },

    {
        id: 4,
        name: "GitHub",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faGithub} style={{color: "#f2f4f6",}} />,
        techUrl: "https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/GitHub"
    },

    {
        id: 5,
        name: "npm",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faNpm} style={{color: "#f2f4f6",}} />,
        techUrl: "https://docs.npmjs.com/about-npm"
    },

    {
        id: 6,
        name: "Netlify",
        type: "img",
        techIcon: "../public/netlify.svg",
        techUrl: "https://www.netlify.com/about/"
    },

    {
        id: 7,
        name: "Bootstrap",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faBootstrap} style={{color: "#f2f4f6",}} />,
        techUrl: "https://getbootstrap.com/"
    },

    {
        id: 8,
        name: "Figma",
        type: "icon",
        techIcon: <FontAwesomeIcon className="icon" icon={faFigma} style={{color: "#f2f4f6",}} />,
        techUrl: "https://help.figma.com/hc/en-us/articles/14563969806359-What-is-Figma-"
    },

    {
        id: 9,
        name: "VSCode",
        type: "img",
        techIcon:  "../public/icons/vscode.svg",
        techUrl: "https://code.visualstudio.com/"
    },

    {
        id: 10,
        name: "Vite",
        type: "img",
        techIcon:  "/public/icons/vite.svg",
        techUrl: "https://vitejs.dev/guide/"
    },

    // {
    //     id: 11,
    //     name: "React Router",
    //     type: "img",
    //     techIcon:  "../public/icons/reactrouter.svg",
    //     techUrl: "https://reactrouter.com/en/main"
    // }

]