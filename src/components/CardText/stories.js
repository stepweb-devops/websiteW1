import React from 'react';
import { storiesOf } from '@storybook/react';

import CardText from './index';

storiesOf('CardText', module)
    .add('default', () => (
        <CardText>
            Hello world
        </CardText>
    ));
