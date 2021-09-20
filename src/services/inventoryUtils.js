export const addInventoryItem = async (url, data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const fetchInventoryList = async (url) => {
  const response = await fetch(url);
  const inventory = await response.json();

  return inventory;
};
