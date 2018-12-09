import React from 'react';

import styles from './styles.module.scss';

const FormInput = ({
    placeholder,
    className,
    ...rest
}) => {
    return (
        <input { ...rest }
            className={ `${ styles.formInput } ${ className }` }
            placeholder={ placeholder }
        />
    );
};

FormInput.defaultProps = {
    className: '',
    name: '',
    placeholder: '',
    type: '',
    value: ''
};

export default FormInput;
