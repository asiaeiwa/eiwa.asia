import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Partner } from '.';

export default {
  title: 'Components/Partner',
  component: Partner,
} as ComponentMeta<typeof Partner>;

const Template: ComponentStory<typeof Partner> = args => <Partner {...args} />;

export const Normal = Template.bind({});
Normal.args = { alt: 'EiWA Co.,LTD', href: '#', srcImg: '/images/eiwa-logo.png' };
