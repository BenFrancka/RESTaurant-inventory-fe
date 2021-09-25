import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <h1>RESTaurant Inventory </h1>
    <h3>
      <Link to="/add">Add an Item</Link>
    </h3>
    <h3>
      <Link to="/">Return to Inventory</Link>
    </h3>
  </header>
);

export default Header;
