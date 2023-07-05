import React, { FC } from 'react';
import './Header.css';

const Header: FC = () => {
  return (
    <header>
      <div className="header-buttons">
        <button>Browse</button>
        <button>Sell</button>
      </div>
      <h1>FarmGate</h1>
      <div className="header-account">
        <div>Sign In</div>
        <div>Create Account</div>
      </div>
    </header>
  );
};

export default Header;
