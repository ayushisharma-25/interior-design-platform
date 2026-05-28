import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrderStatus } from "../../utils/OrderStatus";
import "./MyOrders.css";

function MyOrders() {
   const navigate = useNavigate();
   const [copiedId, setCopiedId] = useState(null);
   const rawOrders = JSON.parse(localStorage.getItem("allOrders")) || [];

   const orders = rawOrders.filter((order) => order && order.orderId);

   const copyOrderId = async (id, e) => {
      e.stopPropagation();

      await navigator.clipboard.writeText(id);

      setCopiedId(id);

      setTimeout(() => {
         setCopiedId(null);
      }, 1000);
   };

   return (
      <>
         <div className="container">
            <div className="orders-page">
               <div className="orders-header">
                  <h1>MY ORDERS</h1>
                  <p>Track, manage and view all your orders in one place</p>
                  <div className="underline"></div>
               </div>

               <div className="orders-list">
                  {orders.length === 0 ? (
                     <div className="empty-orders">
                        <i className="fa-solid fa-box-open"></i>
                        <h3>No Orders Yet</h3>
                        <p>Your placed orders will appear here.</p>
                     </div>
                  ) : (
                     orders.map((order) => {
                        const firstItem = order.cart?.[0];
                        const currentStatus = getOrderStatus(order.createdAt);
                        return (
                           <div
                              key={order.orderId}
                              className="order-card">

                              <div className="product-image">
                                 <img
                                    src={
                                       firstItem?.image ||
                                       firstItem?.thumbnail ||
                                       firstItem?.images?.[0]
                                    }
                                    alt={firstItem?.title}
                                 />
                              </div>

                              <div className="order-column">
                                 <span className="order">ORDER ID</span>

                                 <div className="order-id-row">
                                    <h3>{order.orderId}</h3>
                                    <div
                                       className="copyy-btn"
                                       onClick={(e) => copyOrderId(order.orderId, e)}
                                    >
                                       {copiedId === order.orderId ? (
                                          <>
                                             <i className="fa-solid fa-check"></i>
                                             <span>Copied</span>
                                          </>
                                       ) : (
                                          <>
                                             <i className="fa-regular fa-copy"></i>
                                             <span></span>
                                          </>
                                       )}
                                    </div>
                                 </div>

                                 <p className="date-text">
                                    <i className="fa-regular fa-calendar"></i>
                                    {new Date(order.createdAt).toLocaleDateString()} ,
                                    {new Date(order.createdAt).toLocaleTimeString()}
                                 </p>

                                 <span className={`status-badge ${currentStatus.toLowerCase().replace(/\s/g, "-")}`}>
                                    <i className="fa-regular fa-clock"></i>
                                    {currentStatus}
                                 </span>
                              </div>

                              <div className="divider"></div>

                              <div className="order-column">
                                 <span className="order">ITEMS</span>
                                 <h4>{order.cart?.length || 1} Item</h4>

                                 <div className="mini-item">
                                    <img
                                       src={firstItem?.image}
                                       alt={firstItem?.title}
                                    />
                                    <div>
                                       <p>{firstItem?.title}</p>
                                       <span>Qty: {firstItem?.qty || 1}</span>
                                    </div>
                                 </div>
                              </div>

                              <div className="divider"></div>

                              <div className="order-column payment-column">
                                 <span className="order">TOTAL AMOUNT</span>
                                 <h2>₹{order.total?.toLocaleString()}</h2>

                                 <p className="payment-title">Payment Method</p>

                                 <p className="payment-method">
                                    <i className="fa-regular fa-credit-card"></i>
                                    {order.paymentStatus === "Pending"
                                       ? "COD"
                                       : "Online Payment"}
                                 </p>
                              </div>

                              <div
                                 className="arrow-btn"
                                 onClick={() => navigate(`/order/${order.orderId}`)}
                              >
                                 <i className="fa-solid fa-chevron-right"></i>
                              </div>
                           </div>
                        );
                     })
                  )}
               </div>

               <div className="stats-bar">
                  <div className="stat-box">
                     <i className="fa-solid fa-bag-shopping"></i>
                     <h3>{orders.length}</h3>
                     <p>Total Orders</p>
                  </div>

                  <div className="stat-box">
                     <i className="fa-solid fa-box"></i>
                     <h3>
                        {orders.filter(
                           (o) => getOrderStatus(o.createdAt) === "Processing"
                        ).length}
                     </h3>
                     <p>Processing</p>
                  </div>

                  <div className="stat-box">
                     <i className="fa-solid fa-truck"></i>
                     <h3>
                        {orders.filter(
                           (o) => getOrderStatus(o.createdAt) === "Delivered"
                        ).length}
                     </h3>
                     <p>Delivered</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default MyOrders;