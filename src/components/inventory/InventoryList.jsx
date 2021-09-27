import React from 'react';
import PropTypes from 'prop-types';
import InventoryItem from './InventoryItem';
import { Link } from 'react-router-dom';
import './InventoryList.css';

const InventoryList = ({ inventory }) => (
  <ul aria-label="inventory-list">
    {inventory.map((inventoryItem) => (
      <Link key={inventoryItem.id} to={`/${inventoryItem.id}`}>
        <li key={inventoryItem.id}>
          <InventoryItem
            itemName={inventoryItem.itemName}
            category={inventoryItem.category}
            itemPrice={inventoryItem.itemPrice}
            totalItems={inventoryItem.totalItems}
            totalPrice={inventoryItem.totalPrice}
          />
        </li>
      </Link>
    ))}
  </ul>
);

InventoryList.propTypes = {
  inventory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      itemName: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      itemPrice: PropTypes.number.isRequired,
      totalItems: PropTypes.number.isRequired,
      totalPrice: PropTypes.number.isRequired,
    })
  ),
};

export default InventoryList;
