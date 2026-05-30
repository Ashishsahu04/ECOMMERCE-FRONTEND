import { useState, useEffect } from "react"
import Card2 from './Card2'

function Products({search}) {
  const [products, setproducts] = useState([])   // start with empty array

  useEffect(() => {

    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setproducts(data))  // update state → React re-renders

  }, [])   // <-- [] means run once on mount only

  const filteredproducts = products.filter((p) => {
    return p.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      {filteredproducts.map((p) => {
        return <Card2 image={p.image} title={p.title} price={p.price} />
      })}
    </>
  )
}

export default Products