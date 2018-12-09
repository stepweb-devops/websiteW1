import React from 'react';
import Select from 'react-select';

import styles from './styles.module.scss';

const customStyles = {
    option: (base) => ({
        ...base,
        padding: 20
    }),

    control: () => ({
        alignItems: 'center',
        border: 0,
        borderRadius: 0,
        color: 'white',
        display: 'flex',
        height: '42px',
        outline: 'none'
    }),

    dropdownIndicator: () => ({
        color: 'white',
        marginRight: '15px'
    }),

    indicatorSeparator: () => ({
        display: 'none'
    }),

    input: (base) => ({
        ...base,
        color: 'white',
        margin: 0,
        padding: 0
    }),

    singleValue: (base, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...base,
            opacity,
            transition
        };
    },

    valueContainer: (base) => ({
        ...base,
        overflow: 'unset',
        padding: 0,
        marginLeft: '15px'
    })
};

const Dropdown = props => {
    const {
        className,
        defaultValue,
        onChange,
        options,
        placeholder,
        selectedOption
    } = props;

    return (
        <Select className={ `${ className } ${ styles.dropdown }` }
            defaultValue={ defaultValue }
            onChange={ onChange }
            options={ options }
            placeholder={ placeholder }
            styles={ customStyles }
            value={ selectedOption }
        />
    );
};

Dropdown.defaultProps = {
    className: ''
};

export default Dropdown;
