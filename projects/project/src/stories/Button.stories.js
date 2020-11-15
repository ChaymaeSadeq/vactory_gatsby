import React from 'react';

import { Button } from 'vactory-ui';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = ({label, ...rest}) => <Button {...rest}>{label}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Button 2',
};


export const Outline = Template.bind({});
Outline.args = {
  outline: 'primary',
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'primary',
  label: 'Button',
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'primary',
  label: 'Button',
  size: 'small',
};

