import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import WideCarousel from '.';

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

storiesOf('WideCarousel', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <WideCarousel items={ items }
            selectedIndex={ 0 }
            slidesToShow={ 3 }
        />
    ));
