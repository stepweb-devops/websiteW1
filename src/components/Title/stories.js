import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from './index';

storiesOf('Title', module)
    .add('default', () => ( <Title text="Listen To The Podcast" /> ));
