function Card2(props) {
  return (
    <div style={{border:"1px red solid" ,display:"flex",margin:"10px",padding:"10px",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <img
        height={250}
        width={250}
        src={props.image}
        alt={props.title}
      />
      <h2>title:{props.title}</h2>
      <h3>price:{props.price}</h3>
    </div>
  )
}

export default Card2