import React from 'react';

import styles from './styles.module.scss';

const Title = props => {
    const {
        className,
        text
    } = props;

    return (
        <h2 className={ `${ styles.text } ${ className }` }>
            { text }
        </h2>
    );
};

export default Title;
