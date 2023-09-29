// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Header from './components/header/Header.jsx'
import About from './components/about/About.jsx'
import Tech from './components/tech/Tech.jsx'
import Projects from './components/projects/Projects.jsx'
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
