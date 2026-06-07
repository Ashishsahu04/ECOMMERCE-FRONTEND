import { useState, useEffect } from "react"
import Card2 from './Card2'

function Products({search}) {
  const [products, setproducts] = useState([])   // start with empty array

  useEffect(() => {

    fetch('https://ecommerce-backend-gjze.onrender.com/products')//backend link added
      .then(response => response.json())
      .then(data => setproducts(data))  // update state → React re-renders

  }, [])   // <-- [] means run once on mount only

  // Example of POST request to add a new product
  // useEffect(() => {
  // fetch('http://localhost:3000/products', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({// your product data here
  //   id:25,
  //   title:"Nick shoe",
  //   price: 99.99,
  //   image: "https://example.com/image.jpg"                               
  // })
  // })
  // }, []) // Run once on mount

  const filteredproducts = products.filter((p) => {
    return p.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
    <div style={{display:"flex", justifyContent:"center",gap:"20px", flexWrap:"wrap"}}>
      {filteredproducts.map((p) => {
        return <Card2 image={p.image} title={p.title} price={p.price} 
        style={{display:"flex", flexwrap:"wrap"}} />
      })}
    </div>
    </>
  )
}

export default Products