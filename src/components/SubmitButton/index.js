import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './styles.module.scss';

class SubmitButton extends Component {
    static defaultProps = {
        className: '',
        disabled: false,
        label: 'Submit'
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
            disabled,
            label
        } = this.props;

        return (
            <button className={ `${ styles.button } ${ className }` }
                disabled={ disabled }
                onClick={ this.handleClick }
            >
                { label }
            </button>
        );
    }
}

export default withRouter(SubmitButton);
