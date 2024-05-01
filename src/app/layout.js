

import Navbar from "@/components/navbar/page";
import { Inter } from "next/font/google";
// import {loggInProvider} from '@/app/utils/auth'
 
// import "./globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children  }) {

  // const isLogIn = localStorage.getItem("isLoggedIn") ?true :false
  
  return  (
    <html lang="en">
        
      <body className={inter.className}>
        {/* <loggInProvider > */}
        <Navbar/>
        {children}
        {/* </loggInProvider> */}
        </body>
     
    </html> 
  );
}