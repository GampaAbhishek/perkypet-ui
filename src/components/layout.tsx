import { Outlet, Link, NavLink } from "react-router-dom";
import Logo from "./logo";

export default function Layout() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <nav className="main-nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About us
          </NavLink>
          <NavLink
            to="/benefits"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Benefits
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Pricing
          </NavLink>
          <NavLink
            to="/breeds"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            View Breeds
          </NavLink>
        </nav>
        <div className="contact-button">
          <Link to="/contact" className="contact-link">
            Contact
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
