import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './PlayerAccountCard';

storiesOf('Components|Cards/Radio Cards', module)
  .add('Player Account Card', () => <Card />)