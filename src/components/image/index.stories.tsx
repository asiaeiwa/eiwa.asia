import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Image } from '.';

export default {
  title: 'Components/Image',
  component: Image,
  args: { src: 'https://via.placeholder.com/140x100', width: 140, height: 100 },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = args => <Image {...args} alt="Storybook" />;

export const Normal = Template.bind({});

export const Lazy = Template.bind({});
Lazy.args = { isLazy: true };

export const Rounded = Template.bind({});
Rounded.args = { modifiers: 'rounded', isLazy: true };
