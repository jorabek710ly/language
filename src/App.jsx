import React from 'react'
// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advantages from "./components/Advantages";
import Contact from "./components/Contact";
import Class from "./components/Class";
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Class />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;