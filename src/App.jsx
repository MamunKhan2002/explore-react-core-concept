import { useState } from 'react'
import './App.css'
import Counts from './Counts';
import Posts from './Posts';

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
      <Counts></Counts>
      <Posts></Posts>
      {/* <button onClick={HandleBtn}>Button</button>
      <button onClick={() => HandleClick(3)}>Button-2</button>
      <button onClick={() => alert('button-3 clicked')}>Button-3</button> */}
    </>
  )
}



export default App
