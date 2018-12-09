import React from 'react';

import styles from './styles.module.scss';

const CardText = props => {
    const {
        children,
        className
    } = props;

    return (
        <div className={ `${ styles.cardText } ${ className }` }>
            { children }
        </div>
    );
};

CardText.defaultProps = {
    className: ''
};

export default CardText;
