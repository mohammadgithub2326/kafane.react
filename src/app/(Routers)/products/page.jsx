'use client'
// pages/products.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Products.module.css';
// import { useRouter } from 'next/navigation';

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [showExpired, setShowExpired] = useState(true);
  const [showLowStock, setShowLowStock] = useState(true);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    // const loggedInStatus = localStorage.getItem('loggedIn');
    //  setLoggedIn(!!loggedInStatus);
     
     fetchProducts();
    }, []);
 
  // if (!loggedIn) {
  //   router.push('/Login');
  //   return null; // Ensure nothing is rendered until redirection is complete
  // }


  const filterProducts = () => {
    let filteredProducts = products;

    if (showExpired) {
      filteredProducts = filteredProducts.filter(product => {
        return new Date(product.expiryDate) < new Date();
      });
    }

    if (showLowStock) {
      filteredProducts = filteredProducts.filter(product => {
        return product.stock < 100;
      });
    }

    return filteredProducts;
  };

  const handleExpiredCheckboxChange = () => {
    setShowExpired(!showExpired);
  };

  const handleLowStockCheckboxChange = () => {
    setShowLowStock(!showLowStock);
  };

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} checked={showExpired} onChange={handleExpiredCheckboxChange} />
        <label className={styles.checkboxLabel}>Show Expired</label>
      </div>
      <div className={styles.checkboxContainer}>
        <input type="checkbox" className={styles.checkbox} checked={showLowStock} onChange={handleLowStockCheckboxChange} />
        <label className={styles.checkboxLabel}>Show Low Stock</label>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine Name</th>
            <th>Medicine Brand</th>
            <th>Unit Price</th>
            <th>Expiry Date</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filterProducts().map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.medicineName}</td>
              <td>{product.medicineBrand}</td>
              <td>{product.unitPrice}</td>
              <td>{product.expiryDate}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsPage;
