import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';

storiesOf('Button', module)
  .add('Default', () => <Button>Button text</Button>)
  .add('Submit', () => <Button type='submit' />)
  .add('Reset', () => <Button type='reset' />);