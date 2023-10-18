import React, { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header>
      <div className="header-pages">
        <h2>
          <Link to="/browse">Browse</Link>
        </h2>
        <h2>
          <Link to="/list">Sell</Link>
        </h2>
      </div>
      <h1>
        <Link to="/">FarmGate</Link>
      </h1>
      <div className="header-account">
        <h2 className="buttonsOnRight">
          <Link to="/login">Sign in</Link>
        </h2>
        <h2 className="buttonsOnRight">
          <Link to="/signup">Create account</Link>
        </h2>
      </div>
    </header>
  );
};

export default Header;
