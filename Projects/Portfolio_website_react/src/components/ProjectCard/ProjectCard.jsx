import "./ProjectCard.css";

import Button from "../Button/Button";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <Button
            text="GitHub"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          />

          <Button
            text="Live Demo"
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
