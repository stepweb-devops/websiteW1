import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import IconLink from './index';

storiesOf('IconLink', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('default', () => <IconLink />)
    .add('active', () => <IconLink isActive={ true } />);
