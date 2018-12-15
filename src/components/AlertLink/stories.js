import React from 'react';
import { storiesOf } from '@storybook/react';

import AlertLink from './index';

storiesOf('AlertLink', module)
    .add('default', () => <AlertLink count="4" />);
