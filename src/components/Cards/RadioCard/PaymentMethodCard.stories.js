import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from './PaymentMethodCard';

storiesOf('Components|Cards/Radio Cards', module)
  .add('Payment Method Card', () => <Card />)