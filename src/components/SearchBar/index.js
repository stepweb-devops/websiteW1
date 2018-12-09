import React from 'react';

import Dropdown from '../Dropdown';
import SearchButton from '../SearchButton';
import SubmitButton from '../SubmitButton';

import styles from './styles.module.scss';

const SearchBar = props => {
    const {
        className
    } = props;

    return (
        <div className={ `${ className } ${ styles.container }` } >
            <span className={ styles.text }>
                Search career tips
            </span>

            <Dropdown className={ styles.dropdown }
                placeholder="Any Topic"
            />

            <Dropdown className={ styles.dropdown }
                placeholder="Sort by"
            />

            <SubmitButton label="Go" />

            <SearchButton className={ styles.searchButton }
                text="Search By Keyword"
            />
        </div>
    );
};

SearchBar.defaultProps = {
    className: ''
};

export default SearchBar;
