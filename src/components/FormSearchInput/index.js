import React from 'react';

import FormInput from '../FormInput';

import styles from './styles.module.scss';

const FormSearchInput = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.leftSideContainer }>
                <i className={`fas fa-search ${ styles.leftIcon }`} />

                <FormInput className={ styles.input }
                    placeholder="Marketing"
                />
            </div>

            <i className={`fas fa-arrow-right ${ styles.rightIcon }`} />
        </div>
    );
};

export default FormSearchInput;
