import React from 'react';

import FormInput from '../FormInput';

import styles from './styles.module.scss';

const FormPasswordInput = props => {
    const {
        className,
        hideText,
        onChange,
        placeholder,
        ...rest
    } = props;

    return (
        <FormInput { ...rest }
            className={ `${ styles.password } ${ className }` }
            onChange={ onChange }
            placeholder={ placeholder }
            type="password"
            value={ hideText }
        />
    );
};

FormPasswordInput.defaultProps = {
    className: ''
};

export default FormPasswordInput;
