import React from 'react';

import ActionButton from '../ActionButton';
import CheckBox from '../Checkbox';
import FormEmailInput from '../FormEmailInput';
import FormPasswordInput from '../FormPasswordInput';
import HorizontalDivider from '../HorizontalDivider';
import IconLink from '../IconLink';
import Link from '../Link';
import LinkedInButton from '../LinkedInButton';
import Title from '../Title';

import styles from './styles.module.scss';

const LoginCard = props => {
    const {
        className
    } = props;

    return (
        <div className={ `${ styles.loginCard } ${ className }` }>
            <IconLink className={ styles.times }
                icon="times"
            />

            <Title className={ styles.titleText }
                text="Welcome back"
            />

            <LinkedInButton />

            <HorizontalDivider />

            <FormEmailInput placeholder="john@xyz.com" />

            <FormPasswordInput className={ styles.password } />

            <Link className={ styles.fogotPassword }
                text="Forgot Password?" 
                to="/"
            />

            <ActionButton className={ styles.actionButton }
                label="SIGN IN"
                to="/signin"
            />

            <CheckBox className={ styles.checkbox }
                label="Remember Me"
            />

            <div className={ styles.registerLink }>
                <p className={ styles.registerLinkText }>
                    Do not have an Account?
                </p>
                
                <Link text=" Sign" 
                    to="/"
                />
            </div>
        </div>
    );
};

LoginCard.defaultProps = {
    className: ''
};

export default LoginCard;
