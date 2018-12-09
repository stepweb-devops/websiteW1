import React from 'react';
import { storiesOf } from '@storybook/react';

import CardFooter from '.';

storiesOf('CardFooter', module)
    .add('default', () => <CardFooter text="How I Went From Being Inexperienced to a Full-Time Sportswriter in 3 Years From Being Inexperienced" />);
