
import Link from "next/link";
import React from "react";
const Navbar =()=>{
    return(
        <div className="bg-[#FBEBB5] w-[1440px] h-[900]"> 
            <ul className="flex justify-center gap-14">
            
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/shop">Shop</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                </ul> 
        
              
        </div>
    )
}
export default Navbar