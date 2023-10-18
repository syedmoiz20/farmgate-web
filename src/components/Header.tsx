import React, { FC } from "react";
import "./Header.css";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header: FC = () => {
  // const navigate = useNavigate();
  // const linkToBrowse = () => {
  //   navigate("/browse");
  // };
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
        <div>Sign In</div>
        <div>Create Account</div>
      </div>
    </header>
  );
};

export default Header;
