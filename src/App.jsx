// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Navbar from '../src/components/Navbar.js'
import Header from '../src/components/Header.jsx'
import About from '../src/components/About.jsx'
import Tech from '../src/components/Tech.jsx'
import Projects from '../src/components/Projects.jsx'
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <About />
    <Tech />
    <Projects />
    </>
  )
}

export default App
