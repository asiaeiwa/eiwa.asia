import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Logo } from '.';

export default {
  title: 'Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = args => <Logo {...args} />;

export const Normal = Template.bind({});
Normal.args = { width: 149, height: 52, href: '#' };

export const Footer = Template.bind({});
Footer.args = { width: 200, height: 70, href: '#', modifiers: 'white' };
