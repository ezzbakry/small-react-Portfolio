import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/Landing/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Header from './components/Navbar/Navbar'
import Foot from './components/Footer/Footer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Landing></Landing>
      <About></About>
      <Skills></Skills>
      <Foot></Foot>
    </>
  )
}

export default App
