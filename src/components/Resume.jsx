function Resume(){
    const resumeLink = "https://drive.google.com/file/d/1Ej3z31HJJl7yE6jYHyJkZvIKuDJQJbpg/view?usp=drivesdk";

    return(
      <section id="resume" className="section">
        <h2>Resume</h2>
        <p>Click the link below to view or download my resume:</p>
        <a href={resumeLink} className="resume-link" target="_blank" rel="noopener noreferrer">
          📄 View My Resume
        </a>
      </section>
    );
}
export default Resume