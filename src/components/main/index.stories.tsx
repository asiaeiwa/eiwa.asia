import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Main } from '.';

export default {
  title: 'Components/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = args => <Main {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'Lorem ipsum dolor.' };

export const PaddingBottom = Template.bind({});
PaddingBottom.args = { children: 'Lorem ipsum dolor.', modifiers: 'padding-bottom' };
