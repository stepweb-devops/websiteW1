import React, { Component } from 'react';

import NavigationLinks from '../NavigationLinks';

import styles from './styles.module.scss';

const items = [
    {
        isActive: true,
        label: 'jobs',
        to: '/'
    },
    {
        isActive: false,
        label: 'companies',
        to: '/'
    },
    {
        isActive: false,
        label: 'degrees',
        to: '/'
    },
    {
        isActive: false,
        label: 'career tips',
        to: '/'
    },
    {
        isActive: false,
        label: 'how it works',
        to: '/'
    },
    {
        isActive: false,
        label: 'upgrade now',
        to: '/'
    }
];

class Navigation extends Component {
    render() {
        const {
            navigation
        } = this.props;

        const navigationStatus = navigation
            ? styles.navigationActive
            : '';

        return (
            <div className={ `${ styles.navigationContainer } ${ navigationStatus }` }>
                <div className={ styles.arrowUp } />

                <NavigationLinks items={ items } />
            </div>
        );
    }
}

Navigation.defaultProps = {
    navigation: true
};

export default Navigation;
