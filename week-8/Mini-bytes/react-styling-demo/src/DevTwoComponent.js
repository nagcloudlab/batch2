import React from 'react';
import styles from './dev2style.module.css'
function DevTwoComponent(props) {
    return (
        <div className="card card-body">
            <span className={styles['my-text']}>Developer Two</span>
        </div>
    );
}

export default DevTwoComponent;