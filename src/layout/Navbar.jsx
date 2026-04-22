import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand bg-light rounded mb-3 px-3">
      <Link className="navbar-brand" to="/">Anime App</Link>

      <div className="navbar-nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/list">Anime</Link>
        <Link className="nav-link" to="/new">Add</Link>
      </div>
    </nav>
  );
}