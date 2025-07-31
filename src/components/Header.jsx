function Header() {
  const name = "Navneet Kumar";
  const profession = "Java Full Stack Developer";

  return (
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
  );
}

export default Header;
