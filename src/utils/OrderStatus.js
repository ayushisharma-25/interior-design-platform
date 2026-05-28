export const getOrderStatus = (createdAt) => {
    const now = Date.now();
    const diff = now - createdAt;

    const minutes = diff / (1000 * 60);
    const hours = diff / (1000 * 60 * 60);
    const days = diff / (1000 * 60 * 60 * 24);

    if (minutes < 5) return "Order Placed";
    if (minutes < 30) return "Processing";
    if (hours < 24) return "Shipped";
    if (days < 2) return "Out for Delivery";
    return "Delivered";
};