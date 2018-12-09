import React from 'react';

import sampleLogo from './sample-logo.svg';

import styles from './styles.module.scss';

const Logo = props => {
    const {
        className,
        image
    } = props;

    return (
        <img alt="logo"
            className={ `${ styles.logo } ${ className }` }
            src={ image }
        />
    );
};

Logo.defaultProps = {
    className: '',
    image: sampleLogo
};

export default Logo;
