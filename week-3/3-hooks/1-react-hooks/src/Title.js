import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import AuthContext from './AuthContext';

const themeStyles = (dark) => {
    return {
        backgroundColor: dark ? '#333' : '#ccc',
        color: dark ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }
}


function Title(props) {
    const darkTheme = useContext(ThemeContext)
    const user = useContext(AuthContext)
    return (
        <div style={themeStyles(darkTheme)}>
            Title :  {user}
        </div>
    );
}

export default Title;