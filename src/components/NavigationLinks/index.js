import React, { Component } from 'react';

import NavgiationLink from '../NavigationLink';

import styles from './styles.module.scss';

class NavigationLinks extends Component {
    render() {
        const {
            className,
            items
        } = this.props;

        return (
            <div className={ `${ styles.navigationLinks } ${ className }` } >
                {
                    items.map((item, index) => (
                        <NavgiationLink isActive={ item.isActive }
                            key={ index }
                            label={ item.label }
                            to={ item.to }
                        />
                    ))
                }
            </div>
        );
    }
}

NavigationLinks.defaultProps = {
    className: ''
};

export default NavigationLinks;
