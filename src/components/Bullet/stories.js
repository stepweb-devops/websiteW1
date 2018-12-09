import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Bullet from '.';

const actions = {
    onClick: action('Clicked')
};

storiesOf('Bullet', module)
    .add('default', () => (
        <Bullet { ...actions } />
    ))
    .add('active', () => (
        <Bullet { ...actions }
            isActive={ true }
        />
    ));
