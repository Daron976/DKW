import React from 'react';

const About = () => (
  <section id="about" className="about-content flex" data-testid="about">
    <div className="about-details-container">
      <h2>Who am I</h2>
      <p className="text-content">
        Hello there,
        <br />
        I am a Full-Stack developer and an automobile enthusiast who loves to write clean
        and concise code.
        I am also an aspiring Mechanical Engineer.
        In my free time, I enjoy learning about cars and their manufacturing process.
        It amazes me to see how mankind builds things of great significance.
        <br />
        I am proficient in multiple languages, frameworks, and technologies,
        and I am capable of efficiently completing tasks with time to spare.
        <br />
        I am your developer, let&apos;s get on a
        {' '}
        <a
          className="contact-cta"
          href="#contact"
        >
          <strong>
            <em>
              zoom call.
            </em>
          </strong>
        </a>
        <br />
      </p>
    </div>
    <div className="about-details-container">
      <h2>Experience</h2>
      <ul className="about-list">
        <li className="about-list-item">
          <h3>Full Stack Engineer</h3>
          <br />
          Microverse - Highlighted Personal ProjectsMicroverse - Highlighted Personal Projects
          <br />
          Aug 2022 - Present · 8 mosAug 2022 - Present · 8 mos
          <br />
          City of Johannesburg, Gauteng, South Africa · Remote
        </li>
        <li className="about-list-item">
          <br />
          EXPERIENCES & ACCOMPLISHMENTS
          <br />
          - Built, tested, and deployed maintainable web applications.
          <br />
          - Managed project plans using the Kanban method.
          <br />
          - Worked on projects as a team member, as well as as an individual.
          <br />
          - Troubleshot web application issues, including typographical, and formatting problems.
          <br />
          - Documented APIs with unit tests.
          <br />
          - Built responsive web applications.
          <br />
          - Improved team members and colleagues with constructive feedback.
          <br />
          - Never missed project deadlines.
          <br />
          - Over a 1000 hours in pair-programming and remote development
        </li>
        <li className="about-list-item">
          <br />
          Highlighted Personal Projects:
          <br />
          - Currex: https://github.com/Daron976/currency-ex
          <br />
          - Forenomic: https://github.com/Daron976/Forenomic
          <br />
          - QuickMaths: https://github.com/laiifuu/QuickMaths-BackEnd
        </li>
      </ul>
      <ul className="about-list">
        <li className="about-list-item">
          <h3>Student Mentor</h3>
          <br />
          Microverse · Part-time
          <br />
          Sep 2022 - Oct 2022 · 2 mos
          <br />
          San Francisco, California, United States · Remote
        </li>
        <li className="about-list-item">
          <br />
          EXPERIENCES & ACCOMPLISHMENTS
          <br />
          - Mentored junior web developers, providing technical support through code reviews.
          <br />
          - Proposed improvements to code organization to
          improve code quality and overall performance.
          <br />
          - Provided advice and tips on maintaining motivation to preserve longevity in the program.
        </li>
      </ul>
    </div>
    <div className="about-details-container">
      <h2>Skills</h2>
      <ul className="about-list skills-ul flex">
        <li className="about-list-item">
          <h3 className="skill-header">Tech-Stack</h3>
          <li className="about-list-item">Ruby</li>
          <li className="about-list-item">Rails</li>
          <li className="about-list-item">React & Redux</li>
          <li className="about-list-item">JavaScript</li>
          <li className="about-list-item">CSS</li>
          <li className="about-list-item">HTML5</li>
        </li>
        <li className="about-list-item">
          <h3 className="skill-header">Tools & Methods</h3>
          <li className="about-list-item">Git, Git-flow</li>
          <li className="about-list-item">GitHub & GitHub-flow</li>
          <li className="about-list-item">Mobile/Responsive Development</li>
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
          <li className="about-list-item">Volunteering</li>
          <li className="about-list-item">Leadership</li>
        </li>
      </ul>
    </div>
  </section>
);

export default About;
