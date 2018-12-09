import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Carousel from '.';

const items = [
    {
        footerText: 'lorem asd asd asda asd asfa ipsum dolor sit amit 111 lorem asd asd asda lorem asd asd asda lorem asd asd asda',
        to: '/'
    },
    {
        footerText: 'lorem ipsum dolor asd asd asda asd asfa sit amit 222',
        to: '/'
    },
    {
        footerText: 'lorem ipsum 333',
        to: '/'
    },
    {
        footerText: 'lorem ipsum t 444',
        to: '/'
    },
    {
        footerText: 'lorem ipsum dolor sit amit 555',
        to: '/'
    }
];

storiesOf('Carousel', module)
    .add('default', () => (
        <BrowserRouter>
            <Carousel items={ items }
                slidesToShow={ 3 }
            >
                {
                    (handleNext, handlePrevious, handlePick, selectedIndex) => (
                        <div>
                            <button onClick={ handleNext }>
                                Next
                            </button>

                            <button onClick={ handlePrevious }>
                                Previous
                            </button>
                        </div>
                    )
                }
            </Carousel>
        </BrowserRouter>
    ));
