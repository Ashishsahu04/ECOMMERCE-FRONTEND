import { useState } from 'react'

function Counter() {
  // useState(0) → initial value is 0
  // count → the current value (read this in JSX)
  // setCount → the setter function (call this to update)
  const [count, setCount] = useState(0)

  return (
    <div style={{  display:"flex",justifyContent: "center",Color:"lightblue"}} >
      {/* <button>Count: {count}</button><br></br><br></br> */}
      <button onClick={() => setCount(count + 1)} style={{backgroundColor:"green", color:"white", width:"300px"}}> Count : {count} </button>
      {/* <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(0)}>Reset</button> */}
    </div>
  )
}
export default Counter