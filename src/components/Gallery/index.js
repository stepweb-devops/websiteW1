import React, { PureComponent } from 'react';

import Card from '../Card';

import styles from './styles.module.scss';

class Gallery extends PureComponent {
    componentDidMount() {
        const {
            items,
            slidesToShow
        } = this.props;

        if (slidesToShow > items.length) {
            throw new Error('"slidesToShow" must be less than or equal to items length');
        }
    }

    render() {
        const {
            className,
            items,
            selectedIndex,
            slideClassName,
            slidesToShow
        } = this.props;

        const translateValue = (100 / slidesToShow) * selectedIndex;

        return (
            <div className={ `${ styles.gallery } ${ className }` }>
                <div className={ styles.slider }
                    style={{ transform: `translateX(-${ translateValue }%)` }}
                >
                    {
                        items.map((item, index) => (
                            <div className={ `${ styles.slide } ${ slideClassName }` }
                                key={ index }
                            >
                                <Card footerText={ item.footerText }
                                    to={ item.to }
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Gallery;
