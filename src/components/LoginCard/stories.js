import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LoginCard from '.';

export const actions = {
    onClick: action('onClick')
};

storiesOf('LoginCard', module)
    .add('default', () => (
        <LoginCard />
    ));
