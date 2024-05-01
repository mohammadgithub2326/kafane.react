"use client"
// components/Navbar.js

import Link from 'next/link';
import styles from './navbar.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Login from '@/app/(Routers)/Login/page';



const Navbar = () => {


  const router = useRouter()
  useEffect(() => {
  const login = localStorage.getItem("loggedIn")
  }, [])
  
  
  // console.log(logIn)
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand} onClick={()=>router.push("/Orders")}>kafane</div>
      <ul className={styles.navLinks}>
        <li className={styles.navItem}>
           {/* <Link >  */}
            <p className={styles.navLink}  onClick={() => router.push("/Orders" )}
>Orders</p>
          {/* </Link> */}
        </li>
        <li className={styles.navItem}>
          {/* <Link href="/products"> */}
            <p className={styles.navLink} onClick={() => router.push("/products")}
>Products</p>
          {/* </Link> */}
        </li>
        <li className={styles.navItem}>
          {/* <Link href="/Users" > */}
            <p className={styles.navLink} onClick={() => router.push("/Users" )} >Users</p>
          {/* </Link> */}
        </li>
        <li className={styles.navItem}>
          <Link href="/Login">
            <p className={styles.navLink} >Logout</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
