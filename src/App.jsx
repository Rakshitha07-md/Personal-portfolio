import "./index.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Rakshitha<span>.</span></div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hello">HELLO, I'M</p>

          <h1>
            Rakshitha <span>Gowda</span> 👋
          </h1>

          <h2>Information Science Engineering Student</h2>

          <p className="description">
            I am interested in Software Development, Artificial Intelligence,
            Full Stack Development and emerging technologies.
          </p>

          <div className="buttons">
            <a href="#projects" className="btn primary">
              View My Projects
            </a>

            <a
            href="/resume.pdf" 
            className="btn secondary" download>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-title">ABOUT ME</p>
        <h2>Who I Am</h2>

        <div className="about-card">
          <p>
            I am a 3rd year Information Science Engineering student with a
            passion for technology and problem solving. I enjoy building
            websites, learning Artificial Intelligence and developing
            practical projects.
          </p>

          <p>
            My goal is to continuously improve my technical skills and build
            innovative solutions that can solve real-world problems.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <p className="section-title">MY SKILLS</p>
        <h2>Technologies I Work With</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <span>💻</span>
            <h3>Programming</h3>
            <p>Python, Java, C</p>
          </div>

          <div className="skill-card">
            <span>🌐</span>
            <h3>Web Development</h3>
            <p>HTML, CSS, JavaScript, React</p>
          </div>

          <div className="skill-card">
            <span>🗄️</span>
            <h3>Database</h3>
            <p>MongoDB, MySQL</p>
          </div>

          <div className="skill-card">
            <span>🤖</span>
            <h3>Artificial Intelligence</h3>
            <p>AI Concepts, AI Tools</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <p className="section-title">MY WORK</p>
        <h2>Featured Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <div className="project-icon">🤖</div>
            <h3>AI College Assistant</h3>
            <p>
              An AI-based assistant designed to help students with college
              information, questions and daily academic activities.
            </p>
            <span className="tech">AI • Web • Python</span>
          </div>

          <div className="project-card">
            <div className="project-icon">📚</div>
            <h3>AI Library Assistant</h3>
            <p>
              A smart library system that helps students search books and
              access library-related information easily.
            </p>
            <span className="tech">React • Node.js • MongoDB</span>
          </div>

          <div className="project-card">
            <div className="project-icon">🍔</div>
            <h3>Online Food Ordering</h3>
            <p>
              A web-based food ordering system where users can view food items,
              register and place orders online.
            </p>
            <span className="tech">HTML • CSS • JavaScript • Database</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-title">CONTACT</p>
        <h2>Let's Connect</h2>

        <p>
          Interested in working together or discussing technology?
          Feel free to contact me.
        </p>

        <a
          href="mailto:anug89590@gmail.com"
          className="btn primary"
        >
          Contact Me
        </a>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Rakshitha Gowda. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;