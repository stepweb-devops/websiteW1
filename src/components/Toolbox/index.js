import React, { Component } from 'react';

import IconLink from '../IconLink';

import styles from './styles.module.scss';

class Toolbox extends Component {
    render() {
        return (
            <div className={ styles.toolbox }>
                <IconLink className={ styles.icon }
                    icon={ 'search' } 
                />
                
                <IconLink className={ styles.icon }
                    icon={ 'bell' } 
                />
                
                <IconLink className={ styles.icon }
                    icon={ 'user' } 
                />
            </div>         
        );
    }
}

export default Toolbox;
