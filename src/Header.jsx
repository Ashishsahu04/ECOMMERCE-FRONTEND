// import { useState } from "react"
import './index.css'
import { Link } from 'react-router-dom'


function Header({setSearch}) {

  function togglemode() {
   document.body.classList.toggle("dark")
  }

 
  return (
    <>
      <header style={{display:"flex", justifyContent:"space-around", backgroundColor:"gray", padding:"10px"}}>

        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg" id="logo"  alt="LOGO" />

        <input
          onChange={(e) => {setSearch(e.target.value)}}
          style={{borderRadius:"10px",padding:"10px",width:"300px",height:"20px"}}
          type="text" placeholder="Search for products"
        />
        <nav style={{display:"flex", gap:"20px",paddingTop:"15px"}}>
          <Link to="/products">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/auth/register">Signup</Link>
          <Link to="/auth/Login">Signin</Link>

        </nav>

        <button onClick={togglemode} >  dark/light </button>

 

      </header>
    </>
  )
}

export default Header