import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './AddPaymentMethodCard';

storiesOf('Components|Cards/Radio Cards', module)
  .add('Add Payment Method Card', () => <Card />)