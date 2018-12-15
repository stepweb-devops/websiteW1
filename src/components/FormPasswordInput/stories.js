import React from 'react';
import { storiesOf } from '@storybook/react';

import FormPasswordInput from './index';

storiesOf('FormPasswordInput', module)
    .add('default with placeholder', () => 
        <FormPasswordInput name="email"
            placeholder="john@xyz.com"
        />
    );
