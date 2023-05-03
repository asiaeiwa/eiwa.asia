import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ModalApplyJob } from '.';

export default {
  title: 'Components/ModalApplyJob',
  component: ModalApplyJob,
} as ComponentMeta<typeof ModalApplyJob>;

const Template: ComponentStory<typeof ModalApplyJob> = args => <ModalApplyJob {...args} />;

export const Normal = Template.bind({});
Normal.args = { isActive: true };
