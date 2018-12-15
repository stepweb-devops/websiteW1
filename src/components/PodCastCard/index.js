import React from 'react';

import ListenButton from '../ListenButton';

import styles from './styles.module.scss';

const PodCastCard = () => {
    return (
        <div className={ styles.container }>
            <ListenButton className={ styles.listenButton } />
        </div>
    );
};

export default PodCastCard;
