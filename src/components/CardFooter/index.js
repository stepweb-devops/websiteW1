import React from 'react';

import styles from './styles.module.scss';

const CardFooter = props => {
    const {
        className,
        text
    } = props;

    return (
        <div className={ `${ styles.cardFooter } ${ className }` }>
            { text }
        </div>
    );
};

CardFooter.defaultProps = {
    className: ''
};

export default CardFooter;
