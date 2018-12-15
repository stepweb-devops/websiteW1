import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import IconLink from '../IconLink';

import styles from './styles.module.scss';

class ListenButton extends Component {
    static defaultProps = {
        className: '',
        disabled: false,
        expandedLabel: 'Listen to our Latest Episode',
        label: 'Listen'
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
            expandedLabel,
            isExpanded,
            label
        } = this.props;

        return (
            <button className={ `${ styles.button } ${ className }` }
                disabled={ disabled }
                onClick={ this.handleClick }
            >
            
                {   
                    isExpanded 
                        ? expandedLabel 
                        : label
                }

                <IconLink className={ styles.icon } 
                    icon="microphone-alt"
                />
            </button>
        );
    }
}

export default withRouter(ListenButton);
