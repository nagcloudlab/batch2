

import React, { useState, useReducer } from 'react';

import { profileReducer } from './profile-reducer'

// UI component
function UseReducer(props) {
    const [state, dispatch] = useReducer(profileReducer, { name: 'Anonymous', age: 0, address: 'Universe' })
    return (
        <div className="alert alert-default">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{state.name}</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>{state.age}</td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>{state.address}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <button onClick={e => dispatch({ type: 'CHANGE_NAME', value: 'Nag' })} className="mr-2">change name</button>
            <button onClick={e => dispatch({ type: 'CHANGE_AGE', value: 37 })} className="mr-2">change age</button>
            <button onClick={e => dispatch({ type: 'CHANGE_ADDRESS', value: 'india' })} className="mr-2">change address</button>
        </div>
    );
}

export default UseReducer;