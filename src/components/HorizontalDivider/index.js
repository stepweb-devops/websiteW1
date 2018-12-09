import React  from 'react';

import styles from './styles.module.scss';

const HorizontalDivider = props =>  {
    return (
        <div className={ styles.container } >
            <div className={ styles.divider } >
                <span className={ styles.label } >
                    OR
                </span>
            </div>
        </div>
    );
};

export default HorizontalDivider;
