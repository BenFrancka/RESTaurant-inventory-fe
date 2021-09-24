import React, { useState } from 'react';
import InsertControls from '../components/inventory/InventoryAddItemControls';
import Header from '../components/inventory/Header';
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
    addInventoryItem('https://localhost.7890/api/v1/inventory', inventory).then(
      history.push('/')
    );
  };

  return (
    <>
      <Header />
      <InsertControls
        inventory={inventory}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddItemToInventory;
