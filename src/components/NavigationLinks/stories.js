import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import NavigationLinks from './index';

const items = [
    {
        label: 'jobs',
        to: '/jobs'
    },
    {
        label: 'companies',
        to: '/companies'
    },
    {
        label: 'degrees',
        to: '/degrees'
    },
    {
        label: 'career tips',
        to: '/career_tips'
    },
    {
        label: 'how it works',
        to: '/how_it_works'
    },
    {
        label: 'upgrade now',
        to: '/upgrade_now'
    }
];

storiesOf('NavigationLinks', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => <NavigationLinks items={ items } />);
