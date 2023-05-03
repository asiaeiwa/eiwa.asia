---
to: src/components/<%= h.changeCase.param(name) %>/index.stories.tsx
---
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { <%= h.changeCase.pascal(name) %> } from '.';

export default {
  title: 'Components/<%= h.changeCase.pascal(name) %>',
  component: <%= h.changeCase.pascal(name) %>,
} as ComponentMeta<typeof <%= h.changeCase.pascal(name) %>>;

const Template: ComponentStory<typeof <%= h.changeCase.pascal(name) %>> = args => <<%= h.changeCase.pascal(name) %> {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'Lorem ipsum dolor.' };

export const XX = Template.bind({});
XX.args = { modifiers: 'xx', children: 'xx' };
