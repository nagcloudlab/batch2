import React, { useState } from 'react';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

import ThemeContext from './ThemeContext';
import AuthContext from './AuthContext';

function UseContext(props) {
    const [darkTheme, setDarkTheme] = useState(true)
    const toggleTheme = () => {
        setDarkTheme(prevTheme => !prevTheme)
    }
    return (
        <div className="alert alert-info">
            <ThemeContext.Provider value={darkTheme}>
                <button onClick={toggleTheme}>toggle theme</button>
                {/* <ClassComponent /> */}
                <AuthContext.Provider value={"Nag"}>
                    <FunctionComponent />
                </AuthContext.Provider>
            </ThemeContext.Provider>

        </div>
    );
}

export default UseContext;