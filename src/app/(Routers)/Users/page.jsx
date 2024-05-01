'use client'

// pages/users.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Users.module.css';
// import { useRouter } from 'next/navigation';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  // const [loggedIn, setLoggedIn] = useState(false);
  // const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users'); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error(error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    };

    fetchData();

    // const loggedInStatus = localStorage.getItem('loggedIn');
    // setLoggedIn(!!loggedInStatus);
  }, []);

  // if (!loggedIn) {
  //   router.push('/Login');
  //   return null; // Ensure nothing is rendered until redirection is complete
  // }

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue.length >= 2) {
      const filteredUsers = users.filter((user) => {
        const fullName = `${user.fullName}`.toLowerCase();
        return fullName.includes(searchValue);
      });
      setSearchResults(filteredUsers);
    } else {
      setSearchResults([]); // Clear search results if less than 2 characters
    }
  };

  const handleReset = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      <input
        type="text"
        placeholder="Search Users (min. 2 characters)"
        value={searchTerm}
        onChange={handleSearch}
        className={styles.searchInput}
      />
      <button onClick={handleReset} className={styles.resetButton}>Reset Search</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile Pic</th>
            <th>Full Name</th>
            <th>DoB</th>
            <th>Gender</th>
            <th>Current City</th>
            <th>Current Country</th>
          </tr>
        </thead>
        <tbody>
          {(searchResults.length > 0 ? searchResults : users).map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.profilePic && ( // Handle potential missing profilePic
                  <img src={user.profilePic} alt={user.fullName} className={styles.profilePic} />
                )}
              </td>
              <td>{user.fullName}</td>
              <td>{user.dob}</td>
              <td>{user.gender}</td>
              <td>{user.currentCity}</td>
              <td>{user.currentCountry}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {searchTerm.length < 2 && <p className={styles.alert}>Please enter at least 2 characters to search.</p>}
    </div>
  );
};

export default UsersPage;
