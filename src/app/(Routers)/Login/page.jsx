'use client'
// pages/login.js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './Login.module.css';
// import { isloginContext } from '@/app/utils/auth';

// export  const [islogIn,setIsLogIn] = useState(false)



 export default function Login () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  // const [loggedIn, setLoggedIn] = useState(false);
  
  // const [isLogIn,setIsLogIn] =useState(false)

  // useEffect(() => {
  //   // Check if user is already logged in
  //   const loggedIn = localStorage.getItem('loggedIn');
  //   if (loggedIn) {
  //     router.push('/Orders');
  //   }
  // }, []);
  

  const handleLogin = () => {
    if (username === password && username !=='') {
      alert('Login successful!');
      // setIsLogIn(true)
      // localStorage.setItem("loggedIn","false")
      router.push('/Orders');
    } else {
      // setIsLogIn(false)
      // localStorage.setItem("true")
      alert('Username and password should be the same.');

      
    }
  };

  return (
    <div className={styles.container}>
      <h5>to login  username and password should be same no what ever it maybe</h5>
      <h1 className={styles.title}>Login</h1>
      <input type="text" className={styles.input} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" className={styles.input} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className={styles.button} onClick={handleLogin}>Login</button>
    </div>
  );
};


