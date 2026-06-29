import "./About.css";
import profileImage from "../../assets/images/profile.jpg";

function About() {
  return (
    <section id="profile" className="about">
      <h2>Professional Profile</h2>

      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Utpal Kumar Das" />
        </div>

        <div className="about-content">
          <p>
            I'm an AI Engineer and Research Scholar with a passion for building
            intelligent applications using modern web technologies.
          </p>

          <p>
            My interests include Machine Learning, Large Language Models,
            FastAPI, React, LangGraph, and cloud deployment.
          </p>

          <p>
            I enjoy transforming research ideas into practical software
            solutions that solve real-world problems.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              🧠 AI Engineering
              <p>LLMs • LangGraph • ML</p>
            </div>
            <div className="highlight">
              💻 Full-Stack Development
              <p>React • FastAPI • REST APIs</p>
            </div>
            <div className="highlight">
              ☁ Cloud & DevOps
              <p>Docker • AWS • Git</p>
            </div>
            <div className="highlight">
              📚 Teaching & Mentoring
              <p>Faculty • Engeneering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
