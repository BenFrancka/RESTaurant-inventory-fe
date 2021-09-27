import React from 'react';
import PropTypes from 'prop-types';
import './InventoryItem.css';

const InventoryItem = ({
  itemName,
  category,
  itemPrice,
  totalItems,
  totalPrice,
}) => (
  <article aria-label="inventory item">
    <h2>{itemName}</h2>
    <p>Category:{' '}{category}</p>
    <p>Item Price:{' '}{itemPrice}</p>
    <p>Total Items:{' '}{totalItems}</p>
    <p>Total Price:{' '}{totalPrice}</p>
  </article>
);

InventoryItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default InventoryItem;

