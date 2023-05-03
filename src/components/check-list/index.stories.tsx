import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CheckList } from '.';

export default {
  title: 'Components/CheckList',
  component: CheckList,
  args: {
    items: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
  },
} as ComponentMeta<typeof CheckList>;

const Template: ComponentStory<typeof CheckList> = args => <CheckList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const White = Template.bind({});
White.args = { modifiers: 'white' };
