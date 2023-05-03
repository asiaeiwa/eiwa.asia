import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BoxSubscribe } from '.';

export default {
  title: 'Components/BoxSubscribe',
  component: BoxSubscribe,
} as ComponentMeta<typeof BoxSubscribe>;

const Template: ComponentStory<typeof BoxSubscribe> = args => <BoxSubscribe {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'Subscribe to Our Newsletter', submitText: 'Submit' };
