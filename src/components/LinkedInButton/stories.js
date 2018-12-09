import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LinkedInButton from '.';

export const actions = {
    onClick: action('onClick')
};

storiesOf('LinkedInButton', module)
    .add('default', () => (
        <LinkedInButton { ...actions } />
    ));
