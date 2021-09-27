import React from 'react';
import PropTypes from 'prop-types';

const InventoryUpdateControls = ({
  onChange,
  onSubmit,
  totalItems,
  totalPrice,
}) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="totalItems">Number of Items: </label>
    <input
      id="totalItems"
      type="number"
      name="totalItems"
      value={totalItems}
      onChange={onChange}
    />
    <label htmlFor="totalPrice"> Total Price: </label>
    <input
      id="totalPrice"
      type="number"
      name="totalPrice"
      value={totalPrice}
      onChange={onChange}
    />
  </form>
);

InventoryUpdateControls.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default InventoryUpdateControls;
