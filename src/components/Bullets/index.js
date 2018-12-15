import React from 'react';

import Bullet from '../Bullet';

import styles from './styles.module.scss';

const Bullets = ({
    className,
    bulletCount
}) => {
    return (
        <div className={ `${ styles.bullets } ${ className }` }>
            {
                [ ...Array(bulletCount) ].map((index, key) => (
                    <Bullet className={ `${ styles.bullet }` }
                        index={ index }
                        key={ key }
                    />
                ))
            }
        </div>
    );
};

Bullets.defaultProps = {
    bulletCount: 0
};

export default Bullets;
