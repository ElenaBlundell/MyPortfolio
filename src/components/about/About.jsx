import React from 'react'
import '/src/components/about/About.css'

export default function About(){
 return (
         <div id="about" className="about">
            <svg className="blob-spin-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1EE3CF" d="M35.5,-61C49.7,-53.4,67.3,-51.2,75.7,-41.9C84.2,-32.7,83.6,-16.3,82.7,-0.5C81.9,15.3,80.8,30.7,72.2,39.7C63.6,48.8,47.5,51.6,34.2,59.8C21,68,10.5,81.5,0,81.4C-10.4,81.4,-20.8,67.8,-31.7,58.2C-42.5,48.6,-53.7,43,-64.7,34C-75.7,25,-86.5,12.5,-89.2,-1.6C-91.9,-15.6,-86.5,-31.2,-76.3,-41.6C-66,-51.9,-50.9,-57,-37.4,-65C-23.9,-73,-11.9,-84,-0.6,-82.9C10.7,-81.8,21.4,-68.7,35.5,-61Z" transform="translate(100 100)" />
            </svg>
            <svg  className="blob-spin-right" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1EE3CF" d="M42.1,-70.7C55.1,-65.4,66.4,-55.2,73.6,-42.6C80.9,-30,83.9,-15,84.9,0.6C85.8,16.1,84.7,32.2,78.6,46.6C72.4,61,61.1,73.7,47.2,78.5C33.2,83.4,16.6,80.4,1.1,78.6C-14.5,76.8,-29,76.1,-40.4,69.8C-51.9,63.4,-60.2,51.5,-68.1,38.9C-76.1,26.4,-83.8,13.2,-84.8,-0.6C-85.8,-14.4,-80.2,-28.7,-73.3,-43C-66.3,-57.3,-57.9,-71.6,-45.5,-77.1C-33,-82.7,-16.5,-79.6,-1,-77.9C14.6,-76.2,29.1,-75.9,42.1,-70.7Z" transform="translate(100 100)" />
            </svg>
            <svg className="blob-spin-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1EE3CF" d="M29.5,-54.3C40.9,-44.6,54.7,-42,63.6,-34.2C72.5,-26.4,76.5,-13.2,71.5,-2.8C66.6,7.5,52.8,15,42.8,21C32.9,26.9,26.8,31.4,20.3,39.2C13.8,47,6.9,58.1,-2.7,62.7C-12.2,67.3,-24.4,65.4,-38.8,62.2C-53.3,58.9,-69.9,54.4,-79.3,43.9C-88.7,33.3,-90.9,16.6,-87.7,1.8C-84.5,-13,-76,-26,-66.3,-36.1C-56.7,-46.3,-45.9,-53.6,-34.7,-63.4C-23.4,-73.2,-11.7,-85.5,-1.3,-83.2C9.1,-80.9,18.1,-64,29.5,-54.3Z" transform="translate(100 100)" />
            </svg>
            <svg className="blob-spin-left" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1EE3CF" d="M38.5,-64.6C52.7,-58.6,68.7,-53.8,74.1,-43.2C79.6,-32.6,74.4,-16.3,70.6,-2.2C66.8,12,64.5,23.9,59.5,35.2C54.5,46.5,46.8,57.2,36.5,63.8C26.1,70.4,13.1,73,-0.2,73.4C-13.5,73.7,-27,71.9,-41.2,67.5C-55.5,63.2,-70.5,56.3,-78.7,44.6C-86.8,32.9,-88,16.5,-87.3,0.4C-86.6,-15.6,-83.9,-31.3,-74.5,-40.8C-65.1,-50.3,-49,-53.6,-35.5,-60C-21.9,-66.3,-11,-75.7,0.6,-76.7C12.2,-77.8,24.4,-70.6,38.5,-64.6Z" transform="translate(100 100)" />
            </svg>
            <svg className="blob-center" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#1EE3CF" d="M40.9,-72.4C53.9,-63.3,65.8,-54.1,74.1,-42C82.3,-30,86.7,-15,88,0.7C89.3,16.5,87.5,33,78.7,44.1C69.9,55.2,54.2,61,40,67.8C25.7,74.7,12.8,82.6,-0.9,84.1C-14.6,85.7,-29.3,80.9,-43.3,73.9C-57.4,66.9,-70.8,57.8,-78,45.1C-85.2,32.4,-86.2,16.2,-86,0.1C-85.9,-16,-84.6,-32.1,-76.5,-43.2C-68.3,-54.2,-53.4,-60.4,-39.5,-69C-25.6,-77.6,-12.8,-88.5,0.6,-89.5C14,-90.5,27.9,-81.5,40.9,-72.4Z" transform="translate(100 100)" />
            </svg>
            <section className="info">
                <h1>Hi, my name is <span className="highlight">Elena</span></h1>
                <p>I'm a <span className="highlight-container"><span className="highlight">Frontend Developer</span></span> based in Sioux Falls, South Dakota.
                    I mainly use <span className="highlight-container"><span className="highlight">CSS, JavaScript, APIs and React</span></span>. 
                     I love creating and building beautiful and fully responsive applications.
                </p>
                <p>
                    I am comfortable working in <span className="highlight-container"><span className="highlight">international</span></span> teams and I have years of <span className="highlight-container"><span className="highlight">experience</span></span> working
                    in Beijing and Hong Kong within teams with diverse cultures and languages.
                </p>
                <div className="links-block">
                    <a href="#contact" tabIndex="-1" className="btn">Contact me</a>
                    <a href="#projects" tabIndex="-1" className="btn">Jump to my projects</a>
                </div>
            </section>
        </div>
    )
}