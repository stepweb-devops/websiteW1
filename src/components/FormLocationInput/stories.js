import React from 'react';
import { storiesOf } from '@storybook/react';

import FormLocationInput from './index';

storiesOf('FormLocationInput', module)
    .add('default', () => (
        <FormLocationInput city="San Diego"
            state="CA"
        />
    ));
