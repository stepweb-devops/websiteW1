import React from 'react';

import Bullets from '../Bullets';
import Gallery from '../Gallery';
import LeftButton from '../LeftButton';
import RightButton from '../RightButton';

import styles from './styles.module.scss';

const WideCarousel = props => {
    const {
        className,
        items,
        selectedIndex,
        slidesToShow
    } = props;

    return (
        <div className={ `${ styles.container } ${ className }` } >
            <Gallery className={ styles.gallery }
                items={ items }
                selectedIndex={ selectedIndex }
                slidesToShow={ slidesToShow }
            />

            <div className={ styles.footer }>
                <div className={ styles.sliderControl }>
                    <LeftButton />

                    <Bullets bulletCount={ slidesToShow }
                        className={ styles.bullets }
                    />

                    <RightButton />
                </div>
            </div>
        </div>
    );
};

WideCarousel.defaultProps = {
    className: ''
};

export default WideCarousel;
