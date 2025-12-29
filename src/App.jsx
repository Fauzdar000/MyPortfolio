import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ use HashRouter
import './App.css'
import Navbar from './component/navbar.jsx'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Projects from './component/Projects.jsx';
import Skills from './component/Skills.jsx';
import Contact from './component/Contact.jsx';
import FloatingButtons from './Floatingbutton/Button.jsx';
import Footer from './Footer/Footer.jsx';
import ChatBot from './component/ChatBot.jsx';

function App() {
  return (
    <div className="portfolio-app">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                  <Skills />
                <Projects />
                <Contact />
              
              </>
            }
          />
        </Routes>
      </Router>
      <FloatingButtons />
      <Footer />
      <ChatBot />
    </div>
  )
}

export default App;
