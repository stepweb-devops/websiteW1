import React from 'react';

import ActionButton from '../ActionButton';
import CardFooter from '../CardFooter';

import styles from './styles.module.scss';

const Card = props => {
    const {
        className,
        footerText,
        to
    } = props;

    return (
        <div className={ `${ styles.card } ${ className }` }>
            <div className={ styles.cardTop }>
                <ActionButton className={ styles.button }
                    label="Read On"
                    to={ to }
                />
            </div>

            <CardFooter text={ footerText } />
        </div>
    );
};

Card.defaultProps = {
    className: ''
};

export default Card;
