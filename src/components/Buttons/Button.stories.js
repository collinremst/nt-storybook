import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

storiesOf('Components|Buttons', module)
  .add('Button Base', () => <Button onClick={action('button-click')}>Hello World!</Button>)


  