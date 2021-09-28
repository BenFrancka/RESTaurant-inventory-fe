export const addInventoryItem = async (data) => {
  const response = await fetch('http://localhost:7890/api/v1/inventory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const fetchInventoryList = async () => {
  const response = await fetch('http://localhost:7890/api/v1/inventory');
  const inventory = await response.json();

  return inventory;
};

export const fetchInventoryItemById = async (id) => {
  const response = await fetch(`http://localhost:7890/api/v1/inventory/${id}`);

  return response.json();
};

export const updateInventoryItem = async (data = {}) => {
  const response = await fetch('http://localhost:7890/api/v1/inventory', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteInventoryItem = async (id) => {
  return await fetch(`http://localhost:7890/api/v1/inventory/${id}`, {
    method: 'DELETE',
  });
};
