
import Hero from './components/Hero'
import Catalogo from './components/Catalogo'
import Servicios from './components/Servicios'
import Navbar from './components/Navbar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          
        </Routes>
        <Hero />
        <Catalogo />
        <Servicios />
      </div>
    </Router>
  )
}

export default App
