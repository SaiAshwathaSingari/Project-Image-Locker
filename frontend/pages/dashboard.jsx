import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.navLinks}>
          <li>
            <Link to="/" style={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/register" style={styles.link}>Register</Link>
          </li>
        </ul>
      </nav>

      <div style={styles.content}>
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard! You are logged in.</p>
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "white"
  },
  logo: { margin: 0 },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
  },
  link: {
    color: "white",
    textDecoration: "none"
  },
  content: {
    padding: "20px"
  }
};

export default Dashboard;
