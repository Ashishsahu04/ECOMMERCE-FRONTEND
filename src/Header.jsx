// import { useState } from "react"
import './Index.css'
import { Link } from 'react-router-dom'


function Header({setSearch}) {

  function togglemode() {
   document.body.classList.toggle("dark")
  }

 
  return (
    <>
      <header style={{display:"flex", justifyContent:"space-around", backgroundColor:"gray", padding:"10px"}}>

        <img src="src/assets/vite.svg" alt="LOGO" />

        <input
          onChange={(e) => {setSearch(e.target.value)}}
          style={{borderRadius:"10px",padding:"10px",width:"300px",height:"20px"}}
          type="text" placeholder="Search for products"
        />
        <nav style={{display:"flex", gap:"20px"}}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/register">Signup</Link>
          <Link to="/login">Signin</Link>

        </nav>

        <button onClick={togglemode}>  dark/light </button>

 

      </header>
    </>
  )
}

export default Header