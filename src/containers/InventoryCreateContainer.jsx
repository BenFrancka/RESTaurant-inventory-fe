import React, { useState } from 'react';
import InsertControls from '../components/inventory/InventoryAddItemControls';
import { addInventoryItem } from '../services/inventoryUtils';
import { useHistory } from 'react-router-dom';

const AddItemToInventory = () => {
  const [inventory, setInventory] = useState({});

  const handleChange = ({ target }) => {
    setInventory({ [target.name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const history = useHistory();
    addInventoryItem('https://localhost.7890/api/v1/add', inventory).then(
      history.push('/')
    );
  };

  return (
    <InsertControls
      inventory={inventory}
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
};

export default AddItemToInventory;
