import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const HeaderLink = props => {
    const {
        className,
        linkText,
        linkTo
    } = props;

    return (
        <Link className={ `${ styles.headerLink } ${ className }` }
            to={ linkTo }
        >
            { linkText }
        </Link>
    );
};

HeaderLink.defaultProps = {
    className: ''
};

export default HeaderLink;
