'use client'

// pages/orders.js

import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Orders.module.css';
import Login from '../Login/page';
// import { useRouter } from 'next/navigation';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    new: true,
    packed: true,
    inTransit: true,
    delivered: true,
  });
  // const [loggedIn, setLoggedIn] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    // const loggedInStatus = localStorage.getItem('loggedIn');
    // setLoggedIn(loggedInStatus);

    fetchOrders();
  }, []);

  // if (!loggedIn) {
  //   router.push('/Login');
  //   return null; // Ensure nothing is rendered until redirection is complete
  // }

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const filteredOrders = orders.filter((order) => {
    const { new: New, packed, inTransit, delivered } = filters;
    return (New && order.orderStatus === 'New') ||
      (packed && order.orderStatus === 'Packed') ||
      (inTransit && order.orderStatus === 'InTransit') ||
      (delivered && order.orderStatus === 'Delivered');
  });

 
  // const logIn = localStorage.getItem("loggedIn");
  // console.log(logIn);

  return   (
    <div className={styles.container}>
      <h2>Orders</h2>
      <div className={styles.filters}>
        <input
          type="checkbox"
          id="new"
          name="new"
          checked={filters.new}
          onChange={handleFilterChange}
        />
        <label htmlFor="new">New</label>
        <input
          type="checkbox"
          id="packed"
          name="packed"
          checked={filters.packed}
          onChange={handleFilterChange}
        />
        <label htmlFor="packed">Packed</label>
        <input
          type="checkbox"
          id="inTransit"
          name="inTransit"
          checked={filters.inTransit}
          onChange={handleFilterChange}
        />
        <label htmlFor="inTransit">In Transit</label>
        <input
          type="checkbox"
          id="delivered"
          name="delivered"
          checked={filters.delivered}
          onChange={handleFilterChange}
        />
        <label htmlFor="delivered">Delivered</label>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.amount}</td>
              <td>{order.orderStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
