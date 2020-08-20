import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    return ( 
        <div className="counter">
            <h1> {count}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(0)}>RESET</button>
            <button onClick={() => setCount(prevCount => prevCount-1)}>-</button>
        </div>
     );
}
 
export default Counter;