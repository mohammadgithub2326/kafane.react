"use client"
// components/Navbar.js

import Link from 'next/link';
import styles from './navbar.module.css';
// import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from '@/app/(Routers)/Login/page';



const Navbar = () => {
  const router = useRouter()
  const login = localStorage.getItem("loggedIn")
  
  // console.log(logIn)
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand} >kafane</div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
           {/* <Link >  */}
            <p className={styles.navLink}  onClick={() => router.push(`${login ? "/Orders" : "/Login"}`)}
>Orders</p>
          {/* </Link> */}
        </li>
        <li className={styles.navItem}>
          {/* <Link href="/products"> */}
            <p className={styles.navLink} onClick={() => router.push(`${login ? "/products" : "/Login"}`)}
>Products</p>
          {/* </Link> */}
        </li>
        <li className={styles.navItem}>
          {/* <Link href="/Users" > */}
            <p className={styles.navLink} onClick={() => router.push(`${login ? "/Users" : "/Login"}`)} >Users</p>
          {/* </Link> */}
        </li>
        <li className={styles.navItem}>
          <Link href="/Login">
            <p className={styles.navLink} onClick={()=>localStorage.setItem("loggedIn",false)}>Logout</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
