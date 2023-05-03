import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from '.';

export default {
  title: 'Components/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'Lorem ipsum dolor.', isActive: true };
