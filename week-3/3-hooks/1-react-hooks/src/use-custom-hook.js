import React, { useState, useEffect } from 'react';

import { useLocalStorage } from './use-localstoaage-custom-hook'

const UseCustomHook = () => {
    const [text, setText] = useLocalStorage() //  custom hook
    return (
        <div className="alert alert-info">
            <input value={text} onChange={e => setText(e.target.value)} type="text" className="form-control" />
        </div>
    );
};

export default UseCustomHook