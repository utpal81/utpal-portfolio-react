import "./Button.css";

function Button({ text, href, onClick, variant = "primary", target, rel }) {
  // If href exists, render a link
  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={`btn ${variant}`}>
        {text}
      </a>
    );
  }

  // Otherwise render a normal button
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
