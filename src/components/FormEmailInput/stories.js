import React from 'react';
import { storiesOf } from '@storybook/react';

import FormEmailInput from './index';

storiesOf('FormEmailInput', module)
    .add('default with placeholder', () => 
        <FormEmailInput name="email"
            placeholder="john@xyz.com"
        />
    );
