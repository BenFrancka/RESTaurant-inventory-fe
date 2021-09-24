import React from 'react';
import PropTypes from 'prop-types';

const InventoryItem = ({
  itemName,
  category,
  itemPrice,
  totalItems,
  totalPrice,
}) => (
  <>
    <h2>{itemName}</h2>
    <p>{category}</p>
    <p>{itemPrice}</p>
    <p>{totalItems}</p>
    <p>{totalPrice}</p>
  </>
);

InventoryItem.propTypes = {
  itemName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default InventoryItem;

