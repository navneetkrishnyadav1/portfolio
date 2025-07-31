function Skills(){
      const skills = {
    Languages: ["Java", "SQL", "JavaScript"],
    Web: ["HTML", "CSS", "React"],
    Frameworks: ["Spring Boot", "Spring MVC", "Spring Security"],
    Databases: ["MySQL", "PostgreSQL"],
    Tools: ["Git", "Postman", "IntelliJ", "VS Code"],
    Concepts: ["OOPs", "REST APIs", "DBMS", "DSA"]
  };

    return(
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
    );
}
export default Skills;