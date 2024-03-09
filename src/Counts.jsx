import { useState } from "react"

export default function Counts() {
    const [count, setCount] = useState(0);
    function HandleAdd() {
        const newCount = count + 1;
        setCount(newCount);
    }

    function HandleRemove() {
        const newCount = count - 1;
        setCount(newCount);
    }
    // console.log(count, setCount);
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={HandleAdd}>Add</button>
            <button onClick={HandleRemove}>Remove</button>
        </div>
    )
}