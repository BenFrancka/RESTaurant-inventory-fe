import React, { useState, useEffect } from 'react';
import InventoryList from '../components/inventory/InventoryList';
import Header from '../components/inventory/Header';
import { fetchInventoryList } from '../services/inventoryUtils';

const InventoryListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [inventory, setInvenentory] = useState([]);

  useEffect(() => {
    fetchInventoryList('https://localhost.7890/api/v1/inventory')
      .then((inventory) => setInvenentory(inventory))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <img
        src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
        alt="loading-spinner"
      />
    );
  }
  return (
    <>
      <Header />
      <InventoryList inventory={inventory}/>
    </>
  );
};

export default InventoryListContainer;
