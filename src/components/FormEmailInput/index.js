import React, { PureComponent } from 'react';

import FormInput from '../FormInput';

import styles from './styles.module.scss';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class FormEmailInput extends PureComponent {
    state = {
        isEmailValid: false
    }

    onEmailValueChange = (event) => {
        const value =  event.target.value;

        const { onChange } = this.props;

        const isEmailValid = this.validateEmail(value);

        this.setState({ isEmailValid });
        
        if (typeof onChange === 'function') {
            onChange(event);
        }
    }

    validateEmail(email) {
        const { onValidate } = this.props;

        const isEmailSyntaxValid = emailRegex.test(email);

        if (isEmailSyntaxValid && typeof onValidate === 'function') {
            onValidate(email);
        }

        return isEmailSyntaxValid;
    };

    render(){
        const {
            isRequired,
            name,
            placeholder,
            validate,
            value
        } = this.props;

        const { isEmailValid } = this.state;

        return (
            <FormInput className={ `${ (!isEmailValid && styles.hasError) } ${ styles.email }` }
                isRequired={ isRequired }
                name={ name }
                onChange={ this.onEmailValueChange }
                placeholder={ placeholder }
                type="email"
                validate={ validate } 
                value={ value }
            />
        );
    }
};

export default FormEmailInput;
