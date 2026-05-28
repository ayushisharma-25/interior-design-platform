export const generateId = (prefix) => {
  return prefix + "_" + Math.random().toString(36).slice(2, 9);
};

export const saveOrder = (order) => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));
};

export const getOrders = () => {
  return JSON.parse(localStorage.getItem("orders")) || [];
};