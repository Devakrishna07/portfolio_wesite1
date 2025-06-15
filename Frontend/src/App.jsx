import React, { useEffect } from 'react'
import Homepage from './pages/Homepage'
import About from './pages/About'
import NavBar from './components/NavBar'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ToggleButton from './components/ToggleButton'

const App = () => {
  const handleThemeChange = (theme) =>{
    const root = window.document.documentElement;
    if(theme === "dark"){
      root.classList.add("dark");
    }else{
      root.classList.remove("dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    handleThemeChange(savedTheme);
  },[]);

  return (
    <div className="scroll-smooth">
      <NavBar onThemeChange={handleThemeChange} />
      <Homepage />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App
