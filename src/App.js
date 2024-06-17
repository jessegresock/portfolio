import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="app">
      <div id="resume" className="resume">
        <header className="resume-header">
          <h4>Jesse Gresock</h4>
          <h6>john.doe@example.com | (123) 456-7890 | linkedin.com/in/johndoe</h6>
        </header>
        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Experienced software developer with a strong background in JavaScript, React, and CSS. 
            Proven ability to lead projects and work collaboratively in team environments.
          </p>
        </section>
        <section className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Software Developer</h3>
            <p>ABC Company | Jan 2020 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React and Node.js.</li>
              <li>Collaborated with designers to create user-friendly interfaces.</li>
              <li>Led a team of 5 developers in project XYZ.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3>Junior Developer</h3>
            <p>XYZ Company | Jun 2018 - Dec 2019</p>
            <ul>
              <li>Assisted in the development of internal tools using JavaScript.</li>
              <li>Participated in code reviews and team meetings.</li>
            </ul>
          </div>
        </section>
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>University of Somewhere</h3>
            <p>Bachelor of Science in Computer Science | 2014 - 2018</p>
          </div>
        </section>
        <section className="resume-section">
          <h2>Skills</h2>
          <p>JavaScript, React, Node.js, CSS, HTML, Git, Agile methodologies</p>
        </section>
      </div>
    </div>
  );
}

export default App;
