import "./Hero.css";
import profileImage from "../../assets/images/profile.jpg";
import resume from "../../assets/resume/resume.pdf";
import Button from "../Button/Button.jsx";

function Hero() {
  return (
    <section id="home" className="hero">
      <img src={profileImage} alt="Utpal Kumar Das" className="profile-image" />
      <p className="hero-greeting">Hi, I'm</p>

      <h1 className="hero-name">Utpal Kumar Das</h1>

      <h2 className="hero-title">AI Engineer | Python Developer | Educator</h2>

      <p className="hero-description">
        Building AI-powered applications with React, FastAPI and LangGraph.
      </p>

      <div className="hero-buttons">
        <Button
          text="View Resume"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
        />

        <Button text="Featured Work" />
      </div>
    </section>
  );
}

export default Hero;
