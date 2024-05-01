'use client'
import Navbar from "@/components/navbar/page";
import Image from "next/image";
import Login from "./(Routers)/Login/page";
// import {isloginContext} from '@/app/utils/auth'




export default function Home() {

      // const {isLogIn, setIsLogIn}  = isloginContext()
  
  return (
    <>
    <Login/>
    </>
    
  );
}
