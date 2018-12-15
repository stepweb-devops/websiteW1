import React from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './index';

storiesOf('Checkbox', module)
    .add('default', () => <Checkbox />)
    .add('checked', () => <Checkbox isChecked="true" />);
