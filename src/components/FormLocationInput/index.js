import React from 'react';

import FormInput from '../FormInput';

import styles from './styles.module.scss';

const FormLocationInput = props => {
    const {
        city,
        state
    } = props;

    const placeholder = `${ city }, ${ state }`;

    return (
        <div className={ styles.container }>
            <i className={`fas fa-map-marker-alt ${ styles.icon }`} />

            <FormInput className={ styles.input }
                placeholder={ placeholder }
            />
        </div>
    );
};

export default FormLocationInput;
