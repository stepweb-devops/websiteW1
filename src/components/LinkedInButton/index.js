import React, { Component } from 'react';

import styles from './styles.module.scss';

class LinkedInButton extends Component {
    handleClick = event => {
        const {
            onClick
        } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    render() {
        return (
            <button className={ styles.linkedInButton }
                onClick={ this.handleClick }
            >
                <i className={ `fab fa-linkedin-in ${ styles.icon }` } />

                <span className={ styles.label }>
                    continue with linkedin
                </span>
            </button>
        );
    }
}

export default LinkedInButton;
