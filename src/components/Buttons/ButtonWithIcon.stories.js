import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './ButtonWithIcon';

storiesOf('Components|Buttons', module)
  .add('Button With Icon', () => <Button />)