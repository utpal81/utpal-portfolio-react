import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const navItems = [
    {
      name: "Home",
      href: "#home",
      icon: "fa-house",
    },
    {
      name: "Profile",
      href: "#profile",
      icon: "fa-user",
    },
    {
      name: "Skills",
      href: "#skills",
      icon: "fa-code",
    },
    {
      name: "Featured Work",
      href: "#work",
      icon: "fa-briefcase",
    },
    {
      name: "Insights",
      href: "#insights",
      icon: "fa-lightbulb",
    },
    {
      name: "Connect",
      href: "#connect",
      icon: "fa-handshake",
    },
  ];
  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href}>
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.name}</span>
            </a>
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
