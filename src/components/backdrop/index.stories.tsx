import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Backdrop } from '.';

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
} as ComponentMeta<typeof Backdrop>;

const Template: ComponentStory<typeof Backdrop> = args => (
  <div style={{ width: 300, height: 400, position: 'relative', backgroundColor: '#fdafaf' }}>
    <Backdrop {...args} />
  </div>
);

export const Normal = Template.bind({});
Normal.args = { isActive: true };

export const Block = Template.bind({});
Block.args = { isActive: true, modifiers: 'block' };
