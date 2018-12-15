import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';

import ActionButton from '.';

export const actions = {
    onClick: action('onClick')
};

storiesOf('ActionButton', module)
    .add('default', () => (
        <BrowserRouter>
            <ActionButton { ...actions }
                label="Read on"
            />
        </BrowserRouter>
    ))
    .add('disabled', () => (
        <BrowserRouter>
            <ActionButton { ...actions }
                disabled={ true }
                label="Read on"
            />
        </BrowserRouter>
    ));
