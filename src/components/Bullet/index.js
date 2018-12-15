import React, { Component } from 'react';

import styles from './styles.module.scss';

class Bullet extends Component {
    static defaultProps = {
        className: ''
    }

    state = {
        isActive: false
    }

    handleClick = () => {
        this.setState(state => ({
            isActive: !state.isActive
        }));
    }

    render() {
        const {
            className
        } = this.props;

        const {
            isActive
        } = this.state;

        return (
            <div className={ `${ styles.bullet } ${ className } ${ isActive && styles.active }` }
                onClick={ this.handleClick }
            />
        );
    }
}

export default Bullet;
