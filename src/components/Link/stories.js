import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import Link from './index.js';

storiesOf('Link', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('with text', () => (
        <Link text="Forgot Password?"
            to="/"
        />
    ));
