import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './Card';

storiesOf('Components|Cards', module)
  .add('Default card', () => <Card />);