import React from 'react';

const About = () => (
  <section id="about" className="about-content flex" data-testid="about">
    <div className="about-details-container">
      <h2>Who am I</h2>
      <p className="text-content">
        Hello there,
        <br />
        I am a Front-end developer and automobile enthusiast with a love for clean concise code,
        and an aspiring Mechanical Engineer.
        <br />
        Pair programming and remote work specialist. Fluent in multiple languages,
        frameworks, and technologies,
        and capable of getting the job done efficiently with time to spare.
        <br />
        I am your developer, let&apos;s get on a zoom call.
        <br />
      </p>
    </div>
    <div className="about-details-container">
      <h2>Experience</h2>
      <ul className="about-list">
        <li className="about-list-item">
          Over 700 hours of remote coding
        </li>
        <li className="about-list-item">
          Over 700 hours of Pair Programming and collaboration
        </li>
        <li className="about-list-item">
          Over 10 projects built in 3 months (Individually & in a team)
        </li>
      </ul>
    </div>
    <div className="about-details-container">
      <h2>Skills</h2>
      <ul className="about-list skills-ul flex">
        <li className="about-list-item">
          <h3 className="skill-header">Front-End</h3>
          <li className="about-list-item">React & Redux</li>
          <li className="about-list-item">JavaScript</li>
          <li className="about-list-item">CSS</li>
          <li className="about-list-item">HTML5</li>
        </li>
        <li className="about-list-item">
          <h3 className="skill-header">Tools & Methods</h3>
          <li className="about-list-item">Git, Git-flow</li>
          <li className="about-list-item">GitHub & GitHub-flow</li>
          <li className="about-list-item">Mobile/Resposive Development</li>
          <li className="about-list-item">Jest Testing</li>
          <li className="about-list-item">Dev Tools</li>
        </li>
        <li className="about-list-item">
          <h3 className="skill-header">Professional</h3>
          <li className="about-list-item">Remote Pair-Programming</li>
          <li className="about-list-item">Teamwork</li>
          <li className="about-list-item">Mentorship</li>
          <li className="about-list-item">Communication</li>
          <li className="about-list-item">Effective Collaboration</li>
          <li className="about-list-item">Adaptability</li>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
