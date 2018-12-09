import React, { Component } from 'react';

import Gallery from '../Gallery';

class Carousel extends Component {
    state = {
        selectedIndex: 0
    }

    handleNext = () => {
        const {
            items,
            slidesToShow
        } = this.props;

        const { selectedIndex } = this.state;

        if (selectedIndex < items.length - slidesToShow) {
            this.setState(state => ({
                selectedIndex: state.selectedIndex + 1
            }));
        }
    }

    handlePrevious = () => {
        const { selectedIndex } = this.state;

        if (selectedIndex > 0) {
            this.setState(state => ({
                selectedIndex: state.selectedIndex - 1
            }));
        }
    }

    handlePick = (index) => {
        const { slidesToShow } = this.props;

        this.setState({
            selectedIndex: index * slidesToShow
        });
    }

    render() {
        const {
            children,
            className,
            items,
            slideClassName,
            slidesToShow
        } = this.props;

        const { selectedIndex } = this.state;

        return (
            <>
                <Gallery className={ className }
                    items={ items }
                    selectedIndex={ selectedIndex }
                    slideClassName={ slideClassName }
                    slidesToShow={ slidesToShow }
                />

                {
                    children(
                        this.handleNext,
                        this.handlePrevious,
                        this.handlePick,
                        selectedIndex
                    )
                }
            </>
        );
    }
}

export default Carousel;
