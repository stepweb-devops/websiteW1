import React, { Component } from 'react';

import styles from './styles.module.scss';

class RightButton extends Component {
    static defaultProps = {
        className: ''
    };

    handleClick = (event) => {
        const { onClick } = this.props;

        if (typeof onClick === 'function') {
            onClick(event);
        }
    }

    render() {
        const { className } = this.props;

        return (
            <div className={ `${ styles.rightButton } ${ className }` }
                onClick={ this.handleClick }
            >
                <i className="fa fa-angle-right" />
            </div>
        );
    }
};

export default RightButton;
