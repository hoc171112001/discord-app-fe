import type { Meta, StoryObj } from "@storybook/react";
import { CollapseDescription } from "./CollapseDescriptionText";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/CollapseDescription",
  component: CollapseDescription,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    open: { type: "boolean" },
    children: { type: "string" },
  },
} satisfies Meta<typeof CollapseDescription>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    open: true,
    children: "asjkdfhahjkfgashjkd",
  },
};

export const AdjustWidth: Story = {
  args: {
    open: true,
    children: "asjkdfhahjkfgashjkd",
  },
};
