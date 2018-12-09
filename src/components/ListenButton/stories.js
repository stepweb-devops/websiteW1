import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';

import ListenButton from '.';

export const actions = {
    onClick: action('onClick')
};

storiesOf('ListenButton', module)
    .add('default', () => (
        <BrowserRouter>
            <ListenButton { ...actions }
                label="Listen"
            />
        </BrowserRouter>
    ))
    .add('disabled', () => (
        <BrowserRouter>
            <ListenButton { ...actions }
                disabled={ true }
                label="Listen"
            />
        </BrowserRouter>
    ))
    .add('expanded', () => (
        <BrowserRouter>
            <ListenButton { ...actions }
                label="Listen"
                isExpanded={ true }
            />
        </BrowserRouter>
    ));
