import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const LinkComponent = props => {
    const {
        className,
        text,
        to
    } = props;

    return (
        <Link className={ `${ styles.link } ${ className }` }
            to={ to }
        >
            { text }
        </Link>
    );
};

LinkComponent.defaultProps = {
    className: ''
};

export default LinkComponent;
