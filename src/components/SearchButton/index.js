import React from 'react';

import FormInput from '../FormInput';
import IconLink from '../IconLink';

import styles from './styles.module.scss';

const SearchButton = props => {
    const {
        className,
        text
    } = props;

    return (
        <button className={ `${ className } ${ styles.button }` } >
            <IconLink className={ styles.icon }
                icon="search"
            />

            <FormInput className={ styles.input }
                placeholder={ text }
            />
        </button>
    );
};

SearchButton.defaultProps = {
    className: ''
};

export default SearchButton;
