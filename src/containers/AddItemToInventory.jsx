import React, { useState } from 'react';
import InsertControls from '../components/inventory/InventoryAddItemControls';
import Header from '../components/inventory/Header';
import { addInventoryItem } from '../services/inventoryUtils';


const AddItemToInventory = () => {
  const [inventory, setInventory] = useState({});

  const handleChange = ({ target }) => {
    setInventory({ [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addInventoryItem(inventory);
  };

  return (
    <>
      <Header />
      <InsertControls
        itemName={inventory.itemName}
        category={inventory.category}
        itemPrice={inventory.itemPrice}
        totalItems={inventory.totalItems}
        totalPrice={inventory.totalPrice}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddItemToInventory;
