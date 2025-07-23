import './App.css';

function App() {
  const name = "Navneet Kumar";
  const profession = "Java Full Stack Developer";

  const skills = {
    Languages: ["Java", "SQL", "JavaScript"],
    Web: ["HTML", "CSS", "React"],
    Frameworks: ["Spring Boot", "Spring MVC", "Spring Security"],
    Databases: ["MySQL", "PostgreSQL"],
    Tools: ["Git", "Postman", "IntelliJ", "VS Code"],
    Concepts: ["OOPs", "REST APIs", "DBMS", "DSA"]
  };

  const projects = [
    {
      title: "Full-Stack E-Commerce App",
      description: "Built using Spring Boot, React, JWT, Stripe, and deployed on AWS.",
      link: "https://bit.ly/4lZZ7VB"
    },
    {
      title: "AI-Powered Email Assistant",
      description: "Chrome extension + Spring Boot + Spring AI + JWT secured APIs.",
      link: "#"
    }
  ];

  const certifications = [
    {
      title: "Java Spring Boot – eCommerce Masterclass",
      provider: "Udemy",
      link: "http://bit.ly/44DM5Ya"
    },
    {
      title: "Postman API Tester – Expert Level",
      provider: "Postman Academy",
      link: "http://bit.ly/45ajUQz"
    }
  ];

  const resumeLink = "https://drive.google.com/file/d/1Ej3z31HJJl7yE6jYHyJkZvIKuDJQJbpg/view?usp=drivesdk";

  return (
    <div className="App">
      <header className="header">
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a passionate Java Full Stack Developer skilled in building modern, scalable web applications using Java, Spring Boot, React, and cloud technologies.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <h2>Certifications</h2>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index}>
              <strong>{cert.title}</strong> – {cert.provider} (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">View</a>)
            </li>
          ))}
        </ul>
      </section>

      <section id="resume" className="section">
        <h2>Resume</h2>
        <p>Click the link below to view or download my resume:</p>
        <a href={resumeLink} className="resume-link" target="_blank" rel="noopener noreferrer">
          📄 View My Resume
        </a>
      </section>

      <section id="contact" className="section">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:navneet.kumarbtech6418@gmail.com">navneet.kumarbtech6418@gmail.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/navneet-kumar6418" target="_blank" rel="noopener noreferrer">navneet-kumar6418</a></p>
        <p>Phone: +91 7254929724</p>
      </section>

      <footer className="footer">
        <p>© 2025 Navneet Kumar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
