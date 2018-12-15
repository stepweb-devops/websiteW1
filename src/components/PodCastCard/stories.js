import React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import PodCastCard from './index';

storiesOf('PodCastCard', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => (
        <PodCastCard />
    ));
