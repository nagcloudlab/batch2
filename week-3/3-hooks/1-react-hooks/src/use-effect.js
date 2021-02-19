import React, { useState, useEffect } from 'react';

function UseEffect(props) {
    console.log("render");
    const [resourceType, setResourceType] = useState('users') // state-1
    const [items, setItems] = useState([]) // state-2
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    // Effect-1
    useEffect(() => {
        // effect wil run on resourceType change
        console.log("resource changed..");
        fetch('https://jsonplaceholder.typicode.com/' + resourceType)
            .then(response => response.json())
            .then(json => setItems(json))
        return () => {
            console.log("return resource changed..");
        }
    }, [resourceType])


    const handleResize = e => {
        setWindowWidth(window.innerWidth)
    };

    // Effect-2
    useEffect(() => {
        // effect wil run on intial render
        window.addEventListener('resize', handleResize)
        return () => {
            // clean up work
            window.removeEventListener('resize', handleResize)
        }
    }, [])


    // Effect-3
    useEffect(() => {
        // effect run on every render
    })


    return (
        <div className="alert alert-info">
            <button onClick={e => setResourceType('users')} className="btn btn-dark mr-2">users</button>
            <button onClick={e => setResourceType('posts')} className="btn btn-dark mr-2">posts</button>
            <button onClick={e => setResourceType('comments')} className="btn btn-dark mr-2">comments</button>
            <hr />
            {windowWidth}
            <hr />
            {
                items.map((item, idx) => {
                    return (
                        <pre key={idx}>
                            {JSON.stringify(item)}
                        </pre>
                    )
                })
            }

        </div>
    );
}

export default UseEffect;