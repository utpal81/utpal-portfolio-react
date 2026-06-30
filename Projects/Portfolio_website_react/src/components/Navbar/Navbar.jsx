import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const homeNavItems = [
    { name: "Home", type: "section", href: "#home", icon: "fa-house" },
    {
      name: "Featured Work",
      type: "section",
      href: "#work",
      icon: "fa-briefcase",
    },
    { name: "Skills", type: "section", href: "#skills", icon: "fa-code" },
    { name: "Profile", type: "section", href: "#profile", icon: "fa-user" },
    { name: "Insights", type: "page", to: "/insights", icon: "fa-lightbulb" },
    {
      name: "Connect",
      type: "section",
      href: "#connect",
      icon: "fa-handshake",
    },
  ];
  const insightsNavItems = [
    { name: "Home", type: "page", to: "/", icon: "fa-house" },
    { name: "Insights", type: "page", to: "/insights", icon: "fa-lightbulb" },
  ];
  const navItems = location.pathname === "/" ? homeNavItems : insightsNavItems;
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name}>
            {item.type === "page" ? (
              <Link
                to={item.to}
                className={location.pathname === item.to ? "active" : ""}
              >
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.name}</span>
              </Link>
            ) : (
              <a href={item.href}>
                <i className={`fa-solid ${item.icon}`}></i>
                <span>{item.name}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}

export default Navbar;
