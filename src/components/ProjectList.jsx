function ProjectList(){
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

    return (
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
    );
}
export default ProjectList;