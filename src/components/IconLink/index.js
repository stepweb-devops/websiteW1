import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './styles.module.scss';

class IconLink extends Component {
    static defaultProps = {
        className: '',
        isActive: false,
        icon: 'search'
    }

    handleClick = event => {
        const {
            history,
            onClick,
            to
        } = this.props;

        if (to) {
            return history.push(to);
        }

        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    render() {
        const {
            className,
            isActive,
            icon
        } = this.props;

        const iconActive = isActive
            ? styles.iconActive
            : '';

        return (
            <i className={ `fas fa-${ icon } ${ styles.icon } ${ className } ${ iconActive }` }
                onClick={ this.handleClick }
            />
        );
    }
}

export default withRouter(IconLink);
