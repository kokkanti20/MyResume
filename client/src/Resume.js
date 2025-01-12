import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="Resume">
      <header className="header">
        <h1>Tejasree Kokkanti</h1>
        <p>
          8935 160th NE Ave, Redmond, Washington, 98052 | 206-396-9970 | 
          tejasreekokkanti20@gmail.com
        </p>
      </header>

      <section className="section">
        <h2>Education</h2>
        <div className="education">
          <h3>Master of Computer Science</h3>
          <p>City University of Seattle, Washington | Sep 2024</p>
          <p>GPA: 4.0/4.0</p>

          <h3>Bachelor of Computer Science</h3>
          <p>Siddartha Degree College</p>
          <p>GPA: 8.7/10</p>
        </div>
      </section>

      <section className="section">
        <h2>Technical Skills</h2>
        <p>HTML, CSS, Python, Excel</p>
      </section>

      <section className="section">
        <h2>Work Experience</h2>
        <h3>Senior Associate Analyst</h3>
        <p>Wipro Pvt Ltd</p>
        <ul>
          <li>
            Provided superior software solutions through the analysis, definition, and 
            documentation of business and technical requirements.
          </li>
          <li>
            Expertly designed and evaluated applications utilizing Core Java, HTML5, 
            CSS3, and JavaScript.
          </li>
          <li>
            Performed data analysis and reporting utilizing Excel and Google Sheets 
            to fulfill project requirements.
          </li>
          <li>
            Attained 100% production and quality objectives, acknowledged with 
            corporate accolades.
          </li>
          <li>
            Collaborated with development and QA teams to detect, monitor, and rectify 
            software faults effectively.
          </li>
          <li>
            Developed dashboards in PLX to monitor and evaluate project performance 
            data.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          <h3>Online Blood Bank Management System through AWS Architecture</h3>
          <h3>TIC TAC TOE using Python</h3>
        </div>
      </section>
    </div>
  );
};

export default Resume;