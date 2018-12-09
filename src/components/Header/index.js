import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Hamburger from '../Hamburger';
import HeaderLink from '../HeaderLink';
import Navigation from '../Navigation';
import Logo from '../Logo';
import Toolbox from '../Toolbox';

import styles from './styles.module.scss';

class Header extends Component {
    state = {
        isLogedIn: false
    }
     
    render() {
        const {
            isLogedIn
        } = this.state;
        
        const userPanel = isLogedIn
            ? (
                <Toolbox />
            )
            : (
                <HeaderLink className={ styles.link }
                    linkTo={ '/signin' }
                    linkText={ 'sign In' }
                /> 
            );

        return (
            <div className={ styles.header }>
                <Hamburger className={ styles.hamburger } />

                <Link className={ styles.logo }
                    to="/"
                >
                    <Logo />
                </Link>

                <Navigation />

                <div className={ styles.userPanel }>                 
                    { userPanel }

                    <HeaderLink className={ styles.linkBorder }
                        linkText="Employers"
                        linkTo="/"
                    />
                </div>
            </div>
        );
    }
}

export default Header;
