import "./ContactCard.css";

function ContactCard({ icon, title, value, href, target, rel }) {
  return (
    <a href={href} target={target} rel={rel} className="contact-card">
      <i className={icon}></i>

      <div>
        <h3>{title}</h3>

        <p>{value}</p>
      </div>
    </a>
  );
}

export default ContactCard;
