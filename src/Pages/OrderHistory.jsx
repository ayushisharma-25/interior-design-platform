import { getOrders } from "../utils/OrderUtils";

function OrderHistory() {
  const orders = getOrders();

  return (
    <div>
      <h1>My Orders</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map(order => (
        <div key={order.id} className="order-card">
          <h3>{order.id}</h3>
          <p>₹{order.total}</p>

          {order.cart.map(item => (
            <div key={item.id}>
              {item.title || item.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default OrderHistory;