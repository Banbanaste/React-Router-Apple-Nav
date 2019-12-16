import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const navStyle = {
    display: "flex",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "dimgrey",
    justifyContent: "space-between",
    padding: "10px 20px"
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none"
  };

  return (
    <div>
      <div className="nav" style={navStyle}>
        <div>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </div>
        <div>
          <Link to="/mac" style={linkStyle}>
            Mac
          </Link>
        </div>
        <div>
          <Link to="/ipad" style={linkStyle}>
            iPad
          </Link>
        </div>
        <div>
          <Link to="/iphone" style={linkStyle}>
            iPhone
          </Link>
        </div>
        <div>
          <Link to="/watch" style={linkStyle}>
            Watch
          </Link>
        </div>
        <div>
          <Link to="/tv" style={linkStyle}>
            TV
          </Link>
        </div>
        <div>
          <Link to="/music" style={linkStyle}>
            Music
          </Link>
        </div>
        <div>
          <Link to="/Support" style={linkStyle}>
            Support
          </Link>
        </div>
        <div>
          <Link to="/cart" style={linkStyle}>
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
