import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function HandleBtn() {
    alert('Button Clicked')
  }

  function HandleClick(num) {
    return alert(num + 5);
  }
  return (

    <>
      <h3>Explore React Core Concept:</h3>
      <button onClick={HandleBtn}>Button</button>
      <button onClick={() => HandleClick(3)}>Button-2</button>
    </>
  )
}



export default App
