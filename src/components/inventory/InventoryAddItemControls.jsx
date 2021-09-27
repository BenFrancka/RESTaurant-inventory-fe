import React from 'react';
import PropTypes from 'prop-types';

const InsertControls = ({ inventory, onChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="itemName">Item Name</label>
    <input
      name="itemName"
      id="itemName"
      type="text"
      value={inventory.itemName}
      onChange={onChange}
    />
    <label htmlFor="category">Category</label>
    <input
      name="category"
      id="category"
      type="text"
      value={inventory.category}
      onChange={onChange}
    />
    <label htmlFor="itemPrice">Item Price</label>
    <input
      name="itemPrice"
      id="itemPrice"
      type="number"
      value={inventory.itemPrice}
      onChange={onChange}
    />
    <label htmlFor="totalItems">Total Items</label>
    <input
      name="totalItems"
      id="totalItems"
      type="number"
      value={inventory.totalItems}
      onChange={onChange}
    />
    <label htmlFor="totalPrice">Total Price</label>
    <input
      name="totalPrice"
      id="totalPrice"
      type="number"
      value={inventory.totalPrice}
      onChange={onChange}
    />
  </form>
  
);

InsertControls.propTypes = {
  inventory: PropTypes.objectOf(
    PropTypes.shape({
      itemName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      itemPrice: PropTypes.number.isRequired,
      totalItems: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default InsertControls;
