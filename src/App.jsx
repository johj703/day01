import { useState } from 'react' 
import './App.css' 

function App() { 
  const [count, setCount] = useState(0) 
  
  return ( 
    <> 
      <h1>현재 count</h1> 
      <h2 style={{fontSize: 50}}>{count}</h2> 
      <button onClick={() => setCount(count + 1)}>+1</button>{" "} 
      <button onClick={() => setCount(count - 1)}>-1</button> 
      </> 
  )
} 

export default App
