import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <>
    <h1>RESTaurant Inventory </h1>
    <h3>
      <Link to="/add">Add an Item</Link>
      <Link to="/">Return to Inventory
      </Link>
    </h3>
  </>
);

export default Header;
