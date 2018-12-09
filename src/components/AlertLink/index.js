import React, { Component } from 'react';

import IconLink from '../IconLink';

import styles from './styles.module.scss';

class AlertLink extends Component {
    render() {
        const {
            className,
            count,
            icon
        } = this.props;

        return (
            <div className={ `${ styles.iconContainer } ${ className }` }>
                {
                    count > 0
                    && (
                        <span className={ styles.alertCount }>
                            { count }
                        </span>
                    )
                }

                <IconLink className={ styles.alertIcon }
                    icon={ icon }
                />
            </div>
        );
    }
}

AlertLink.defaultProps = {
    className: '',
    count: '',
    icon: 'bell'
};

export default AlertLink;
