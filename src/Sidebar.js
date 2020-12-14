import React from "react";

function Sidebar() {
  return (
    <div className="container-fluid bg-light" sttle={{ height: "100vh" }}>
      <div className="row">
        <nav
          className="col-6 col-sm-4 col-md-2 bg-dark py-5"
          style={{ height: "100vh" }}
        >
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink to="/" exact className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="about" className="nav-link text-white"></NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
