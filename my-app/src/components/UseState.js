import React, {useState} from 'react'

export default function UseState() {

    const [count, setCount] = useState(0);

    const clic = () => {
        setCount(count+1);
    }

    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={clic}>Increament</button>
        </div>
    )
}
