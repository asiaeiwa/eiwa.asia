import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  args: { placeholder: 'Email', name: 'fullname' },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = args => <Input {...args} />;

export const White = Template.bind({});
White.args = { modifiers: 'white' };

export const Black = Template.bind({});
Black.args = { modifiers: 'black' };
