import React from 'react';
import PropTypes from 'prop-types';

const InsertControls = ({
  itemName,
  onItemChange,
  category,
  onCategoryChange,
  itemPrice,
  onItemPriceChange,
  totalItems,
  onTotalCountChange,
  totalPrice,
  onTotalPriceChange,
  onSubmit,
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="itemName">Item Name</label>
    <input id="itemName" type="text" value={itemName} onChange={onItemChange} />
    <label htmlFor="category">Category</label>
    <input
      id="category"
      type="text"
      value={category}
      onChange={onCategoryChange}
    />
    <label htmlFor="itemPrice">Item Price</label>
    <input
      id="itemPrice"
      type="number"
      value={itemPrice}
      onChange={onItemPriceChange}
    />
    <label htmlFor="totalItems">Total Items</label>
    <input
      id="totalItems"
      type="number"
      value={totalItems}
      onChange={onTotalCountChange}
    />
    <label htmlFor="totalPrice">Total Price</label>
    <input
      id="totalPrice"
      type="number"
      value={totalPrice}
      onChange={onTotalPriceChange}
    />
  </form>
);

InsertControls.propTypes = {
  itemName: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default InsertControls;
