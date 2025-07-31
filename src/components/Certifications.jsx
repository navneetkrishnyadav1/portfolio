function Certifications(){
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
    return (
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
    );
}
export default Certifications;