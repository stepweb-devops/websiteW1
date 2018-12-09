import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

class NavigationLink extends Component {
    render() {
        const {
            isActive,
            label,
            to
        } = this.props;

        const active = isActive
            ? styles.active
            : '';

        return (
            <Link className={ styles.navigationLink }
                to={ to }
            >
                <span className={ active } >
                    { label }
                </span>
            </Link>
        );
    }
}

NavigationLink.defaultProps = {
    isActive: false,
    label: '',
    to: ''
};

export default NavigationLink;
