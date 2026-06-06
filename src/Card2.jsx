function Card2(props) {
  return (
    <div style={{border:"1px red solid",width:"250px",backgroundColor:"yellow" ,color:"black",display:"flex",margin:"10px",padding:"10px",justifyContent:"center",flexDirection:"column",alignItems:"center",flexWrap:"wrap"}}>
      <img
        height={200}
        width={200}
        src={props.image}
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <h3>price:{props.price}</h3>
    </div>
  )
}

export default Card2