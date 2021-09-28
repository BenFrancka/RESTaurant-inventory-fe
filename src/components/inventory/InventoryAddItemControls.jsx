import React from 'react';
import PropTypes from 'prop-types';
import './InventoryAddItem.css';

const InsertControls = ({
  itemName,
  category,
  itemPrice,
  totalItems,
  totalPrice,
  onChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="itemName">Item Name:</label>
    <input
      name="itemName"
      id="itemName"
      type="text"
      value={itemName}
      onChange={onChange}
    />
    <label htmlFor="category">Category:</label>
    <input
      name="category"
      id="category"
      type="text"
      value={category}
      onChange={onChange}
    />
    <label htmlFor="itemPrice">Item Price:</label>
    <input
      name="itemPrice"
      id="itemPrice"
      type="number"
      value={itemPrice}
      onChange={onChange}
    />
    <label htmlFor="totalItems">Total Items:</label>
    <input
      name="totalItems"
      id="totalItems"
      type="number"
      value={totalItems}
      onChange={onChange}
    />
    <label htmlFor="totalPrice">Total Price:</label>
    <input
      name="totalPrice"
      id="totalPrice"
      type="number"
      value={totalPrice}
      onChange={onChange}
    />
    <button aria-label="submit button">Add To Inventory</button>
  </form>
);

InsertControls.propTypes = {
  itemName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,

  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InsertControls;
