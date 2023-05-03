import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: { modifiers: 'pink', children: 'Read more' },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Normal = Template.bind({});

export const Little = Template.bind({});
Little.args = { modifiers: 'little', tag: 'a', href: '/contact' };

export const Blue = Template.bind({});
Blue.args = { modifiers: 'blue', tag: 'a', href: '/contact' };

export const Outline = Template.bind({});
Outline.args = { modifiers: 'outline', children: 'Get free trial', tag: 'a', href: '//google.com', target: '_blank' };

export const OutlinePink = Template.bind({});
OutlinePink.args = { modifiers: ['outline', 'pink'], children: 'Choose plan' };

export const OutlineWhite = Template.bind({});
OutlineWhite.args = { modifiers: ['outline', 'white'], children: 'Submit', type: 'submit' };
