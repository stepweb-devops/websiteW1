import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter } from 'react-router-dom';

import SubmitButton from '.';

export const actions = {
    onClick: action('onClick')
};

storiesOf('SubmitButton', module)
    .add('default', () => (
        <BrowserRouter>
            <SubmitButton { ...actions }
                label="Go"
            />
        </BrowserRouter>
    ))
    .add('disabled', () => (
        <BrowserRouter>
            <SubmitButton { ...actions }
                disabled={ true }
                label="Go"
            />
        </BrowserRouter>
    ));
