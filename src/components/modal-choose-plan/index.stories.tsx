import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ModalChoosePlan } from '.';

export default {
  title: 'Components/ModalChoosePlan',
  component: ModalChoosePlan,
} as ComponentMeta<typeof ModalChoosePlan>;

const Template: ComponentStory<typeof ModalChoosePlan> = args => <ModalChoosePlan {...args} />;

export const Normal = Template.bind({});
Normal.args = { isActive: true, titlePack: 'Pro ($100/month)', idPack: 'pro' };
