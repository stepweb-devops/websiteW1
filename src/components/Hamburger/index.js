import React from 'react';

import IconLink from './../IconLink';

import styles from './styles.module.scss';

const Hamburger = props => {
    const {
        className,
        onClick
    } = props;

    return (
        <IconLink className={ `${ styles.hamburgerIcon } ${ className }` }
            icon="bars"
            onClick={ onClick }
        />
    );
};

export default Hamburger;
