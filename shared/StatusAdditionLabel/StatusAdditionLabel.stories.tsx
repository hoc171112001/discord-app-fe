import type { Meta, StoryObj } from '@storybook/react';
import { StatusAdditionLabel } from '.';
import { AuthBox } from '../authBox';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/StatusAdditionLabel',
  component: StatusAdditionLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: { type: 'string' },
    type: { type: 'string' },
    htmlFor: { type: 'string' },
    additionText: { type: 'string' },
    required: { type: 'boolean' },
    showAdditionText: { type: 'boolean' }
  },
  decorators: [Story => <AuthBox body={<Story />} />]
} satisfies Meta<typeof StatusAdditionLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ErrorType: Story = {
  args: {
    children: 'asjkhfasdhajhfaksjdhas',
    type: 'error',
    htmlFor: 'htmlFor',
    additionText: 'error',
    required: true,
    showAdditionText: true
  }
};
