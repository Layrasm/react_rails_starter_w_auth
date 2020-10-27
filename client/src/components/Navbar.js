import React from "react";
import { Link } from "react-router-dom";

// For Basic setup only please change
const NavBar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/">Home</Link>
      <span style={{ marginRight: "10px" }}></span>
      <Link to="/thingsDemo">Things</Link>
    </div>
  );
};

const styles = {
  navbar: {
    background: "white",
    outline: "2px solid",
    outlineColor: "black",
    padding: "10px",
  },
};

export default NavBar;