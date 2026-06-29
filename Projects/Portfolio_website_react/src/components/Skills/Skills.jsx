import "./Skills.css";

import skills from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Technical Expertise</h2>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skill-category">
            <h3>{group.category}</h3>

            <div className="skill-list">
              {group.items.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
