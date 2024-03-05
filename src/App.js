import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul
            className="hero-img"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "calc(15px - 1rem)",
              justifyContent: "flex-end",
              backgroundColor: "whitesmoke",
              height: "80px",
              margin: "0",
              padding: " 20px",
              width: "100%",
            }}
          >
            <li
              style={{
                marginRight: "auto",
              }}
            >
              <h3>kelly schumacher</h3>
              <p>software developer</p>
            </li>
            <li
              style={{
                listStyleType: "none",
                textDecoration: "none",
              }}
            >
              <NavLink
                to="/"
                activeClassName="active"
                style={{ color: "#fff" }}
              >
                Home
              </NavLink>
            </li>
            <li style={{ listStyleType: "none" }}>
              <NavLink
                to="/about"
                activeClassName="active"
                style={{ color: "#fff" }}
              >
                About
              </NavLink>
            </li>
            <li style={{ listStyleType: "none" }}>
              <NavLink
                to="/projects"
                activeClassName="active"
                style={{ color: "#fff" }}
              >
                Projects
              </NavLink>
            </li>
            <li style={{ listStyleType: "none" }}>
              <NavLink
                to="/contact"
                activeClassName="active"
                style={{ color: "#fff" }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
