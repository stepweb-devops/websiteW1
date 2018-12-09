import React from 'react';
import { storiesOf } from '@storybook/react';

import Bullets from '.';

storiesOf('Bullets', module)
    .add('default', () => (
        <Bullets bulletCount={ 3 } />
    ));
