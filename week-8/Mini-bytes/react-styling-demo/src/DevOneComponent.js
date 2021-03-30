import React from 'react';
import styles from './dev1style.module.css';
import LinkButton from './LinkButton';
function DevOneComponent(props) {
    return (
        <div className="card card-body">
            <span className={styles['my-text']}>Developer One</span>
            <hr />
            <LinkButton
                href="https://github.com/styled-components/styled-components"
                target="_blank"
                rel="noopener"
                primary
            >
                GitHub
            </LinkButton>
        </div >
    );
}

export default DevOneComponent;