import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import NavigationLink from './index';

storiesOf('NavigationLink', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => <NavigationLink to="/" />)
    .add('active', () => <NavigationLink isActive={ true } />);
