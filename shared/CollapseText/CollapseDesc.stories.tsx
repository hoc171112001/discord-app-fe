import type { Meta, StoryObj } from '@storybook/react';
import { CollapseDescription } from './CollapseDescriptionText';
import { AuthBox } from '../authBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/CollapseDescription',
  component: CollapseDescription,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    open: { type: 'boolean' },
    color: { type: 'string' },
    children: { type: 'string' }
  },
  decorators: [Story => <AuthBox body={<Story />} />]
} satisfies Meta<typeof CollapseDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    open: true,
    children: 'asjkdfhahjkfgashjkd',
    color: 'default'
  }
};

export const Error: Story = {
  args: {
    open: true,
    children: 'asjkdfhahjkfgashjkd',
    color: 'error'
  }
};

export const Success: Story = {
  args: {
    open: true,
    children: 'asjkdfhahjkfgashjkd',
    color: 'success'
  }
};

export const Warning: Story = {
  args: {
    open: true,
    children: 'asjkdfhahjkfgashjkd',
    color: 'warning'
  }
};
