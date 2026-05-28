import { getOrders } from "../utils/OrderUtils";

function AdminPanel() {
  const orders = getOrders();

  return (
    <div>
      <h1>Admin Panel</h1>

      {orders.map(order => (
        <div key={order.id} className="admin-card">
          <h3>{order.id}</h3>
          <p><b>User:</b> {order.email}</p>
          <p><b>Total:</b> ₹{order.total}</p>

          {order.cart.map(item => (
            <div key={item.id}>
              {item.title || item.name} × {item.qty || 1}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;