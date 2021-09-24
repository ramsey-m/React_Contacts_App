import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h2>Cohort 12 Contact Info</h2>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li>
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to={"/my-card"} className="nav-link">
              MyCard
            </Link>
          </li>
          <li>
            <Link to={"/friends"} className="nav-link">
              Friends
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
