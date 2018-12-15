import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RightButton from './index';

export const actions = {
    onClick: action('onClick')
};

storiesOf('RightButton', module)
    .add('default', () => <RightButton { ...actions } />);
