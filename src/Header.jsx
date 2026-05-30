// import { useState } from "react"
import './Index.css'

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

        <nav style={{display:"flex", gap:"10px",margin:"10px"}}>
          <a href="" style={{textDecoration:"none", color:"white"}}>HOME</a>
          <a href="" style={{textDecoration:"none", color:"white"}}>PRODUCTS</a>
          <a href="" style={{textDecoration:"none", color:"white"}}>ABOUT</a>
          <a href="" style={{textDecoration:"none", color:"white"}}>SIGNUP</a>
          <a href="" style={{textDecoration:"none", color:"white"}}>SIGNIN</a>
        </nav>

        <button onclick={togglemode}>  dark/light </button>

 

      </header>
    </>
  )
}

export default Header