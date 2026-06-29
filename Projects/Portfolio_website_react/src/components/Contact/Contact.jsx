import "./Contact.css";
import ContactCard from "../ContactCard/ContactCard";
import Button from "../Button/Button";

function Contact() {
  return (
    <section id="connect" className="contact">
      <h2>Let's Connect</h2>

      <p className="contact-intro">
        Interested in discussing AI, Full-Stack Development or collaboration
        opportunities?
      </p>

      <div className="contact-grid">
        <ContactCard
          icon="fa-solid fa-envelope"
          title="Email"
          value="toutpal@gmail.com"
          href="mailto:toutpal@gmail.com"
        />

        <ContactCard
          icon="fa-brands fa-linkedin"
          title="LinkedIn"
          value="Connect professionally"
          href="https://www.linkedin.com/in/utpal-das-81abc"
          target="_blank"
          rel="noopener noreferrer"
        />

        <ContactCard
          icon="fa-brands fa-github"
          title="GitHub"
          value="Explore my open-source projects"
          href="https://github.com/utpal81"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>

      <div className="contact-footer">
        <p className="copyright">
          © {new Date().getFullYear()} Utpal Kumar Das
        </p>

        <p className="designer">
          Designed & Developed by
          <span> Utpal Kumar Das</span>
        </p>
      </div>
    </section>
  );
}

export default Contact;
