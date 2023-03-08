import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header className="header">
    <div className="logo-header">
      <div className="logo" />
      <h1>Space Travellers&rsquo; Hub</h1>
    </div>
    <Navbar />
  </header>
);

export default Header;
