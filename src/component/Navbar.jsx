/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </div>
    </nav>
  );
}
