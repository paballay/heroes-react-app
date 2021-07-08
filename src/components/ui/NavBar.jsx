import React from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [{ name: 'Marvel', url: '/marvel' }, { name: 'DC', url: '/dc' }];

const NavBar = () => {
  return (
    <nav className="container-fluid navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          {navItems.map((e, i) => (
            <NavLink
              key={i}
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to={e.url}
            >
              {e.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="d-flex">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;