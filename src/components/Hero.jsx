import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiShield, FiTerminal, FiCode, FiUser } from 'react-icons/fi'
import './Hero.css'

const Hero = () => {
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState([
    { type: 'output', text: 'Welcome to Mohamed Trigui\'s Portfolio Terminal' },
    { type: 'output', text: 'Illinois Tech Cybersecurity Student | GitHub: @medTrigui' },
    { type: 'output', text: 'Type "help" for available commands' }
  ])
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  
  // Different roles you want to cycle through
  const roles = [
    'Cybersecurity Professional',
    'Penetration Tester', 
    'Security Researcher',
    'Red Team Operator',
    'Blue Team Analyst'
  ]
  
  // Interactive terminal commands
  const handleTerminalCommand = (command) => {
    const cmd = command.toLowerCase().trim()
    let response = ''
    
    switch (cmd) {
      case 'help':
        response = 'Available commands: whoami, skills, contact, projects, education, languages, clear, ls'
        break
      case 'whoami':
        response = 'Mohamed Trigui - Cybersecurity Master\'s Student at Illinois Tech | Bug Hunter'
        break
      case 'skills':
        response = 'Security+, OSCP (prep), Python, Java, Bash, JavaScript, TypeScript, Lua, Nmap NSE'
        break
      case 'contact':
        response = 'Email: triguimed85@gmail.com | LinkedIn: /in/mo-trigui | GitHub: /medTrigui'
        break
      case 'projects':
        response = 'PassMan-NextGen, Scapy Scripts, NSE Zero-Day Recon, HTB Writeups, OSINT App'
        break
      case 'clear':
        setTerminalHistory([])
        return
      case 'ls':
        response = 'about.txt  skills.txt  projects/  contact.txt  blog/  htb-writeups/'
        break
      case 'education':
        response = 'Master\'s in Cybersecurity - Illinois Institute of Technology (Current)'
        break
      case 'languages':
        response = 'English, Arabic, French, Spanish (Quadrilingual) 🌍'
        break
      default:
        response = `Command not found: ${command}. Type "help" for available commands.`
    }
    
    setTerminalHistory(prev => [
      ...prev,
      { type: 'input', text: `$ ${command}` },
      { type: 'output', text: response }
    ])
  }
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleTerminalCommand(terminalInput)
      setTerminalInput('')
    }
  }
  
  // Auto-cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content - Side by Side */}
        <motion.div 
          className="hero-main-content"
          variants={itemVariants}
        >
          {/* Profile Section - Left Side */}
          <div className="hero-profile">
            <div className="profile-image">
              <div className="profile-photo-container">
                <img 
                  src="/assets/profile.jpg" 
                  alt="Mohamed - Cybersecurity Professional" 
                  className="profile-photo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="profile-placeholder-container" style={{display: 'none'}}>
                  <FiUser className="profile-placeholder" />
                  <div className="profile-overlay">
                    <span>Add Photo</span>
                  </div>
              </div>
            </div>
          </div>
            <div className="profile-info">
              <h1 className="profile-name">Mohamed</h1>
              <p className="profile-role">{roles[currentRoleIndex]}</p>
              <div className="profile-badges">
                <span className="badge">Security+</span>
                <span className="badge oscp">OSCP (In Progress)</span>
              </div>
            </div>
          </div>

          {/* Interactive Terminal - Right Side */}
          <div className="terminal-section">
            <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="terminal-button red"></span>
                <span className="terminal-button yellow"></span>
                <span className="terminal-button green"></span>
              </div>
              <span className="terminal-title">mohamed@portfolio:~$</span>
            </div>
            <div className="terminal-body">
              <div className="terminal-output">
                {terminalHistory.map((item, index) => (
                  <div key={index} className={`terminal-line ${item.type}`}>
                    {item.type === 'input' ? (
                      <span className="text-blue">{item.text}</span>
                    ) : (
                      <span className="text-green">{item.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="terminal-input-line">
                <span className="text-blue">$ </span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="terminal-input"
                  placeholder="Type 'help' for commands..."
                  autoComplete="off"
                />
                <span className="cursor-blink">|</span>
              </div>
            </div>
          </div>
        </div>
        </motion.div>

        {/* Professional Description */}
        <motion.div 
          className="hero-description"
          variants={itemVariants}
        >
          <p className="description-text">
            <strong>Cybersecurity Master's student</strong> at Illinois Tech specializing in <strong>vulnerability research</strong> and <strong>penetration testing</strong>. 
            Currently preparing for OSCP certification while developing NSE scripts and replicating zero-day vulnerabilities on Linux. 
            Passionate about <strong>exploit development</strong>, <strong>network security</strong>, and building innovative security tools.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          className="hero-actions"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <FiShield className="btn-icon" />
            View Projects
          </motion.a>
          
          <motion.a
            href="#contact"
            className="btn btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <FiMail className="btn-icon" />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Professional Links */}
        <motion.div 
          className="hero-links"
          variants={itemVariants}
        >
          <a href="https://github.com/medTrigui" target="_blank" rel="noopener noreferrer" className="professional-link">
            <FiGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/mo-trigui/" target="_blank" rel="noopener noreferrer" className="professional-link">
            <FiLinkedin /> LinkedIn
          </a>
          <a href="mailto:triguimed85@gmail.com" className="professional-link">
            <FiMail /> Email
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
