import React from 'react';

import IconLink from '../IconLink';

import styles from './styles.module.scss';

const LeftButton = props => {
    const {
        className,
        onClick
    } = props;

    return (
        <IconLink className={ `${ className } ${ styles.leftButton }` }
            icon="chevron-left"
            onClick={ onClick }
        />
    );
};

export default LeftButton;
