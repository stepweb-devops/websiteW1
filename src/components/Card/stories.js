import React from 'react';
import { storiesOf } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import Card from '.';

storiesOf('Card', module)
    .add('default', () => (
        <BrowserRouter>
            <Card footerText="How I Went From Being Inexperienced to a Full-Time Sportswriter in 3 Years From Being Inexperienced"
                to="/"
            />
        </BrowserRouter>
    ));
