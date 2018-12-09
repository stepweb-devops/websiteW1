import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';

import HeaderLink from '../HeaderLink';

storiesOf('HeaderLink', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={ [ '/' ] }>
            { story() }
        </MemoryRouter>
    ))
    .add('with text', () => (
        <HeaderLink linkText="Sign In"
            linkTo="/"
        />
    ));
