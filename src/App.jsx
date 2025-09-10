import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

// Import components (we'll create these next)
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  // Theme state (dark theme by default for cybersecurity aesthetic)
  const [isDarkMode, setIsDarkMode] = useState(true)
  
  // Scroll position for navbar effects
  const [scrolled, setScrolled] = useState(false)
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Toggle theme function (though we'll primarily use dark)
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark')
  }

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      {/* Navigation Header */}
      <Header 
        scrolled={scrolled} 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      
      {/* Main Content */}
      <main>
        {/* Hero Section - First impression */}
        <section id="home">
          <Hero />
        </section>
        
        {/* About Section - Who you are */}
        <section id="about">
          <About />
        </section>
        
        {/* Skills Section - What you know */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Projects Section - What you've built */}
        <section id="projects">
          <Projects />
        </section>
        
        {/* Experience Section - Where you've worked */}
        <section id="experience">
          <Experience />
        </section>
        
        {/* Blog Section - What you're sharing */}
        <section id="blog">
          <Blog />
        </section>
        
        {/* Contact Section - How to reach you */}
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      {/* Scroll to Top Button */}
      {scrolled && (
        <motion.button
          className="scroll-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ↑
        </motion.button>
      )}
    </div>
  )
}

export default App