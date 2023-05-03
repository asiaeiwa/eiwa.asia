import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from '.';

export default {
  title: 'Components/Link',
  component: Link,
  args: { href: '#', decoration: true },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = args => <Link {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Subscribe to Our Newsletter' };

export const Arrow = Template.bind({});
Arrow.args = { children: 'View more', modifiers: 'arrow' };

export const Normal = Template.bind({});
Normal.args = { children: 'Service', modifiers: 'normal' };
