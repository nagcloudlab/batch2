import React, { useState, useEffect, useRef } from 'react';

function UseRef(props) {
    const [name, setName] = useState('')

    // const [renderedCount, setRenderedCount] = useState(0)
    const renderedCount = useRef(0) // mutable reference
    const nameFieldRef = useRef('') // mutable reference


    useEffect(() => {
        // setRenderedCount(prevRenderedCount => prevRenderedCount + 1)
        renderedCount.current = renderedCount.current + 1
    })

    const onButtonClick = () => {
        nameFieldRef.current.focus()
        nameFieldRef.current.value = "Nag"
    }

    return (
        <div className="alert alert-info">
            <button onClick={onButtonClick}>Focus the input</button>
            <hr />
            <input ref={nameFieldRef} onChange={e => setName(e.target.value)} className="form-control" />
            <hr />
            <div>My Name is : {name}</div>
            <hr />
            <div>I rendered {renderedCount.current} times</div>
        </div>
    );
}

export default UseRef;