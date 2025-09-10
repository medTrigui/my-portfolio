import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiSun, FiMoon, FiShield, FiCode, FiUser, FiFolder, FiBriefcase, FiBookOpen, FiMail } from 'react-icons/fi'
import './Header.css'

const Header = ({ scrolled, isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#home', icon: FiUser },
    { name: 'About', href: '#about', icon: FiShield },
    { name: 'Skills', href: '#skills', icon: FiCode },
    { name: 'Projects', href: '#projects', icon: FiFolder },
    { name: 'Experience', href: '#experience', icon: FiBriefcase },
    { name: 'Blog', href: '#blog', icon: FiBookOpen },
    { name: 'Contact', href: '#contact', icon: FiMail },
  ]

  const handleNavClick = (href) => {
    // Smooth scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav container">
        {/* Logo/Brand */}
        <motion.div 
          className="nav-brand"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}>
            <span className="brand-text">
              <span className="brand-name">Mohamed</span>
              <span className="brand-title">Security Professional</span>
            </span>
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="nav-item"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="nav-actions">
          {/* Theme Toggle */}
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.ul
          className={`nav-menu mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? '0%' : '100%'
          }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="nav-item"
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : 50
              }}
              transition={{ delay: isMobileMenuOpen ? index * 0.1 : 0 }}
            >
              <a
                href={item.href}
                className="nav-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
              >
                <item.icon className="nav-icon" />
                <span>{item.name}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </motion.header>
  )
}

export default Header
