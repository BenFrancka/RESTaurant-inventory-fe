import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InventoryItem from '../components/inventory/InventoryItem';
import Header from '../components/inventory/Header';
import { fetchInventoryItemById } from '../services/inventoryUtils';

const UpdateInventoryItemAmount = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [inventoryItem, setInventoryItem] = useState({});

  useEffect(() => {
    fetchInventoryItemById(id)
      .then((response) => setInventoryItem(response))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Header />
      {loading ? (
        <img
          src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
          alt="loading-spinner"
        />
      ) : (
        <InventoryItem 
          itemName={inventoryItem.itemName}
          category={inventoryItem.category}
          itemPrice={inventoryItem.itemPrice}
          totalItems={inventoryItem.totalItems}
          totalPrice={inventoryItem.totalPrice}
        />
      )}
    </>
  );
};

export default UpdateInventoryItemAmount;
