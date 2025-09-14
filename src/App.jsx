import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Moon, Sun, Code, Database, Palette, GitBranch, ChevronDown, ChevronUp, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import profileImage from './assets/yusuff (2).jpg';
import blogImage from './assets/image.png';
import portImage from './assets/port.png';
import libraryImage from './assets/library.png';
import commerceImage from './assets/product.jpg.png';
import gymImage from './assets/Gym.png'

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('op427E5UX5ushb7fT');
    
    // Simulate loading
    setTimeout(() => setLoading(false), 1000);

    // Scroll spy
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });

      // Animate progress bars when they come into view
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          const value = bar.getAttribute('data-value');
          if (bar.style.width === '0%') {
            setTimeout(() => {
              bar.style.width = `${value}%`;
            }, 100);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial scroll check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className={`d-flex justify-content-center align-items-center vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="fw-light">Loading Portfolio...</h4>
        </div>
      </div>
    );
  }

  const projects = [
    {
      id: 1,
      title: "Blog Platform",
      description: "A modern blog platform built with Vue.js and Laravel, featuring user authentication, rich text editing, comment system, and category management.",
      image: blogImage,
      tech: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/Ayomidespenz/Quadri-blog",
      live: "#"
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting platform built with Solidity smart contracts on Ethereum. Features include voter verification, real-time vote counting, and tamper-proof results.",
      image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=400&h=250&fit=crop",
      tech: ["Solidity", "React", "Web3", "Ethereum"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "An interactive portfolio website showcasing skills. Features stunning visuals and smooth animations.",
      image: portImage,
      tech: ["React", "Bootstrap"],
      github: "https://github.com/Ayomidespenz/react-portfolio1",
      live: "https://yusuffport.netlify.app/"
    },
    {
      id: 4,
      title: "Library Management System",
      description: "A comprehensive library system for managing books, memberships, and loans. Includes features for cataloging, search, and user tracking.",
      image: libraryImage,
      tech: ["HTML", "JavaScript", "Bootstrap"],
      github: "https://github.com/Ayomidespenz/New-library-work",
      live: "https://stirring-choux-19915c.netlify.app/"
    },
    {
      id: 5,
      title: "E-commerce Website",
      description: "A responsive e-commerce platform with product catalog, shopping cart, and checkout functionality. Features include product filtering and search.",
      image: commerceImage,
      tech: ["HTML", "JavaScript", "Bootstrap"],
      github: "https://github.com/Ayomidespenz/Cart-list",
      live: "https://storied-babka-0e6b53.netlify.app/"
    },
    {
      id: 6,
      title: "Gym Website",
      description: "A modern fitness website with membership plans, class schedules, and trainer profiles. Includes BMI calculator and workout tracking features.",
      image: gymImage,
      tech: ["HTML", "JavaScript", "Bootstrap"],
      github: "https://github.com/Ayomidespenz/Gym",
      live: "https://fitnesspot.netlify.app/"
    },
  ];

  const skills = {
    frontend: [
      { name: "HTML", proficiency: 90, icon: Code },
      { name: "CSS", proficiency: 85, icon: Code },
      { name: "JavaScript", proficiency: 90, icon: Code },
      { name: "React.js", proficiency: 85, icon: Code },
      { name: "Vue.js", proficiency: 80, icon: Code },
      { name: "TypeScript", proficiency: 75, icon: Code }
    ],
    backend: [
      { name: "PHP", proficiency: 85, icon: Database },
      { name: "Laravel", proficiency: 80, icon: Database },
      { name: "MySQL", proficiency: 85, icon: Database }
    ],
    blockchain: [
      { name: "Solidity", proficiency: 75, icon: GitBranch },
      { name: "Web3.js", proficiency: 50, icon: GitBranch }
    ],
    tools: [
      { name: "Git", proficiency: 90, icon: GitBranch },
      { name: "GitHub", proficiency: 90, icon: GitBranch },
      { name: "Figma", proficiency: 80, icon: Palette }
    ]
  };

  const experience = [
    {
      title: "EduTAMS Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2025 - Present",
      description: "Led development of enterprise web applications using React , Vuejs and Laravel"
    },
    {
      title: "Full Stack Developer",
      company: "Tech Solutions",
      period: "2025 - present",
      description: "Created responsive web interfaces and improved user experience"
    },
    {
      title: "Software Developer",
      company: "Startup Hub",
      period: "2024 - present",
      description: "Contributed to various projects using modern web technologies"
    }
  ];



  return (
    <div className={`${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} style={{ transition: 'all 0.3s ease' }}>
      {/* Navigation */}
      <nav className={`navbar navbar-expand-lg fixed-top ${darkMode ? 'bg-dark navbar-dark' : 'bg-white navbar-light'} shadow-sm`} style={{ backdropFilter: 'blur(10px)', backgroundColor: darkMode ? 'rgba(33, 37, 41, 0.95) !important' : 'rgba(255, 255, 255, 0.95) !important' }}>
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-primary" href="#home">
            Mishary
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <li className="nav-item" key={section}>
                  <a 
                    className={`nav-link px-3 ${activeSection === section ? 'text-primary fw-bold' : ''}`} 
                    href={`#${section}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(section); }}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            
            <button 
              className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}
              onClick={toggleDarkMode}
              style={{ transition: 'all 0.3s ease' }}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="vh-100 d-flex align-items-center position-relative overflow-hidden">
        <div className="position-absolute w-100 h-100" style={{ 
          background: darkMode 
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          opacity: 0.1,
          zIndex: -1
        }}></div>
        
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-2 fw-bold mb-3 typewriter-text" style={{ 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Hi, I'm Quadri Yusuff
              </h1>
              <div className="text-cycler fs-2 mb-4" style={{ height: '60px', overflow: 'hidden' }}>
                <div className="text-cycle-items">
                  <div>Full Stack Developer</div>
                  <div>Web3 Enthusiast</div>
                  <div>Smart Contract Developer</div>
                  <div>UI/UX Designer</div>
                </div>
              </div>
              <p className="lead mb-4 animate-text" style={{ 
                animation: 'fadeInUp 1s ease-out 0.4s both',
                height: '60px'
              }}>
                Building modern web applications and exploring blockchain technology
              </p>
              <div className="d-flex justify-content-center gap-3" style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
                <button 
                  className="btn btn-primary btn-lg px-4 py-2 rounded-pill"
                  onClick={() => scrollToSection('projects')}
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  View My Work
                </button>
                <button 
                  className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-lg px-4 py-2 rounded-pill`}
                  onClick={() => scrollToSection('contact')}
                  style={{ transition: 'all 0.3s ease' }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="position-absolute bottom-0 w-100 text-center pb-4" style={{ animation: 'bounce 2s infinite' }}>
          <ChevronDown size={32} className="text-primary" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="img-fluid rounded-circle shadow-lg"
                style={{ 
                  width: '350px', 
                  height: '350px', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div className="col-lg-6">
              <h2 className="display-4 fw-bold mb-4">About Me</h2>
              <p className="lead mb-4">
                I'm a passionate Full-Stack Developer with over 2 years of experience creating 
                innovative web solutions. I specialize in modern JavaScript frameworks, backend 
                development with PHP/Laravel, and blockchain technology.
              </p>
              <p className="mb-4">
                My journey in tech started with a curiosity about how things work behind the scenes. 
                Today, I combine technical expertise with creative problem-solving to build 
                applications that make a difference.
              </p>
              <div className="d-flex gap-3">
                <a href="https://github.com/Ayomidespenz" className="btn btn-outline-primary" target='_blank' rel='noopener noreferrer'>
                  <Github size={20} className="me-2" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/quadri-yusuff-adisa" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} className="me-2" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-5 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">Skills & Technologies</h2>
          
          <div className="row">
            {/* Frontend Skills */}
            <div className="col-lg-6 mb-4">
              <div className={`card shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
                <div className="card-body">
                  <h3 className="card-title text-primary mb-4">
                    <Code size={24} className="me-2" />
                    Frontend Development
                  </h3>
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="mb-3 skill-item" style={{ animation: `slideIn 0.5s ease-out ${index * 0.1}s both` }}>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <skill.icon size={18} className="text-primary me-2" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-primary">{skill.proficiency}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                          role="progressbar" 
                          style={{ width: '0%' }}
                          data-value={skill.proficiency}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div className="col-lg-6 mb-4">
              <div className={`card shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
                <div className="card-body">
                  <h3 className="card-title text-success mb-4">
                    <Database size={24} className="me-2" />
                    Backend Development
                  </h3>
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="mb-3 skill-item" style={{ animation: `slideIn 0.5s ease-out ${index * 0.1}s both` }}>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <skill.icon size={18} className="text-success me-2" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-success">{skill.proficiency}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                          role="progressbar" 
                          style={{ width: '0%' }}
                          data-value={skill.proficiency}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Blockchain Skills */}
            <div className="col-lg-6 mb-4">
              <div className={`card shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
                <div className="card-body">
                  <h3 className="card-title text-info mb-4">
                    <GitBranch size={24} className="me-2" />
                    Blockchain Development
                  </h3>
                  {skills.blockchain.map((skill, index) => (
                    <div key={index} className="mb-3 skill-item" style={{ animation: `slideIn 0.5s ease-out ${index * 0.1}s both` }}>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <skill.icon size={18} className="text-info me-2" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-info">{skill.proficiency}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar progress-bar-striped progress-bar-animated bg-info" 
                          role="progressbar" 
                          style={{ width: '0%' }}
                          data-value={skill.proficiency}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools & Other Skills */}
            <div className="col-lg-6 mb-4">
              <div className={`card shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
                <div className="card-body">
                  <h3 className="card-title text-warning mb-4">
                    <Palette size={24} className="me-2" />
                    Tools & Technologies
                  </h3>
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="mb-3 skill-item" style={{ animation: `slideIn 0.5s ease-out ${index * 0.1}s both` }}>
                      <div className="d-flex align-items-center justify-content-between mb-1">
                        <div className="d-flex align-items-center">
                          <skill.icon size={18} className="text-warning me-2" />
                          <span>{skill.name}</span>
                        </div>
                        <span className="text-warning">{skill.proficiency}%</span>
                      </div>
                      <div className="progress" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar progress-bar-striped progress-bar-animated bg-warning" 
                          role="progressbar" 
                          style={{ width: '0%' }}
                          data-value={skill.proficiency}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">My Projects</h2>
          
          <div className="row">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-4 col-md-6 mb-4">
                <div className={`card h-100 shadow-lg ${darkMode ? 'bg-dark text-light' : 'bg-white'}`} 
                     style={{ 
                       transition: 'all 0.3s ease',
                       overflow: 'hidden'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-10px)';
                       const img = e.currentTarget.querySelector('img');
                       if (img) img.style.transform = 'scale(1.1)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       const img = e.currentTarget.querySelector('img');
                       if (img) img.style.transform = 'scale(1)';
                     }}>
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={project.image} 
                      className="card-img-top" 
                      alt={project.title}
                      style={{ 
                        height: '200px', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                    <div className="position-absolute top-0 end-0 p-2">
                      <div className="d-flex gap-2">
                        <a href={project.github} className="btn btn-sm btn-dark rounded-circle">
                          <Github size={16} />
                        </a>
                        <a href={project.live} className="btn btn-sm btn-primary rounded-circle">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="d-flex flex-wrap gap-1 mb-3">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="badge bg-secondary">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-5 ${darkMode ? 'bg-secondary' : 'bg-light'}`}>
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">Experience</h2>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {experience.map((exp, index) => (
                <div key={index} className="d-flex mb-4">
                  <div className="flex-shrink-0 me-4">
                    <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" 
                         style={{ width: '50px', height: '50px' }}>
                      <div className="bg-white rounded-circle" style={{ width: '20px', height: '20px' }}></div>
                    </div>
                  </div>
                  <div className={`card shadow-sm flex-grow-1 ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
                    <div className="card-body">
                      <h5 className="card-title text-primary">{exp.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{exp.company}</h6>
                      <p className="card-text"><small className="text-muted">{exp.period}</small></p>
                      <p className="card-text">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="display-4 fw-bold text-center mb-5">Get In Touch</h2>
          
          <div className="row">
            <div className="col-lg-6 mb-4">
              <h3 className="mb-4">Let's work together!</h3>
              <p className="lead mb-4">
                I'm always open to discussing new opportunities and interesting projects.
              </p>
              
              <div className="d-flex align-items-center mb-3">
                <Mail className="text-primary me-3" size={24} />
                <span>quadriyusuff721@gmail.com</span>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Phone className="text-primary me-3" size={24} />
                <span>+234 813-342-2517</span>
              </div>
              <div className="d-flex align-items-center mb-4">
                <MapPin className="text-primary me-3" size={24} />
                <span>Lagos, Nigeria</span>
              </div>
              
              <div className="d-flex gap-3">
              <a href="https://github.com/Ayomidespenz" className="btn btn-outline-primary" target='_blank' rel='noopener noreferrer'>
                  <Github size={20} />
                </a>
               <a href="https://www.linkedin.com/in/quadri-yusuff-adisa" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className={`card shadow-sm ${darkMode ? 'bg-dark' : 'bg-white'}`}>
                <div className="card-body">
                  <form onSubmit={async (e) => {
                    e.preventDefault();
                    setSending(true);
                    try {
                      const templateParams = {
                        user_name: formData.name,
                        user_email: formData.email,
                        message: formData.message,
                        reply_to: formData.email
                      };
                      
                      await emailjs.send(
                        'service_cz3n5bo',
                        'template_krhnqlu',
                        templateParams,
                        'op427E5UX5ushb7fT'
                      );
                      setFormData({ name: '', email: '', message: '' });
                      alert('Message sent successfully!');
                    } catch (error) {
                      console.error('Error details:', error);
                      alert(`Failed to send message: ${error.text || 'Please check your EmailJS configuration'}`);
                    } finally {
                      setSending(false);
                    }
                  }}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input 
                        type="text" 
                        className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : ''}`} 
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : ''}`} 
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea 
                        className={`form-control ${darkMode ? 'bg-dark text-light border-secondary' : ''}`} 
                        rows="5" 
                        placeholder="Your message..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-100"
                      style={{ transition: 'all 0.3s ease' }}
                      disabled={sending}
                    >
                      {sending ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="me-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-4 ${darkMode ? 'bg-dark border-top' : 'bg-light border-top'}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0">&copy; 2025 Quadri Yusuff. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <button 
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                className={`btn btn-link p-0 ${darkMode ? 'text-white' : 'text-dark'}`}
                title="Back to top"
                aria-label="Scroll back to top"
              >
                <ChevronUp size={24} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
          }
          40%, 43% {
            transform: translate3d(0, -15px, 0);
          }
          70% {
            transform: translate3d(0, -8px, 0);
          }
          90% {
            transform: translate3d(0, -3px, 0);
          }
        }

        .card {
          border: none;
        }

        .btn {
          border-radius: 25px;
        }

        .navbar-brand {
          font-family: 'Inter', sans-serif;
        }

        .typewriter-text {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        .text-cycler {
          position: relative;
        }

        .text-cycle-items {
          animation: cycle 8s linear infinite;
        }

        .text-cycle-items > div {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes cycle {
          0%, 25% { transform: translateY(0); }
          30%, 50% { transform: translateY(-60px); }
          55%, 75% { transform: translateY(-120px); }
          80%, 100% { transform: translateY(-180px); }
        }

        .animate-text {
          animation: fadeIn 1s ease-in;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .skill-item {
          opacity: 0;
        }

        .progress-bar {
          transition: width 1s ease-in-out;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default Portfolio;