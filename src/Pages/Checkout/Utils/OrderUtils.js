export const saveOrder = (order) => {

    const existingOrders =
        JSON.parse(localStorage.getItem("allOrders")) || [];

    existingOrders.unshift(order);

    localStorage.setItem(
        "allOrders",
        JSON.stringify(existingOrders)
    );
};