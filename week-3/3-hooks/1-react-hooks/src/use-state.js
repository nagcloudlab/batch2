

import React, { useState } from 'react';

// useState
function UseState(props) {
    const [count, setCount] = useState(0)
    return (
        <div className="alert alert-info">
            <button onClick={e => setCount(count + 1)}>+1</button>
            <span>{count}</span>
            <button onClick={e => setCount(prevCount => prevCount - 1)}>-1</button>
        </div>
    );
}

export default UseState;