import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-greeting">Hi, I'm</p>

      <h1 className="hero-name">Utpal Kumar Das</h1>

      <h2 className="hero-title">AI Engineer | Python Developer | Educator</h2>

      <p className="hero-description">
        Building AI-powered applications with React, FastAPI and LangGraph.
      </p>

      <div className="hero-buttons">
        <button>Download Resume</button>

        <button>Connect</button>
      </div>
    </section>
  );
}

export default Hero;
