import React, { useState } from 'react';

const CompLast = (props) => {

    const [count, setCount] = useState(0); 
    const increment = () =>{
        setCount(count + 1);
    }
    const decrement = () =>{
        setCount(count - 1);
    }

    return (
        <div>
            <h3>카운트 : {count}</h3>
            <button onClick={increment}>증가</button>
            <button onClick={decrement}>감소</button>
        </div>
    );
}

export default CompLast;