import "./FeaturedWork.css";

import projects from "../../data/projects";

import ProjectCard from "../ProjectCard/ProjectCard";

function FeaturedWork() {
  return (
    <section id="work" className="featured-work">
      <h2>Featured Work</h2>

      <p className="section-subtitle">
        Projects I've built using modern web technologies and AI.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedWork;
