import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceItem } from '.';

export default {
  title: 'Components/ServiceItem',
  component: ServiceItem,
} as ComponentMeta<typeof ServiceItem>;

const Template: ComponentStory<typeof ServiceItem> = args => <ServiceItem {...args} />;

export const Normal = Template.bind({});
Normal.args = { imgSrc: '/images/home/service-investment.svg', title: 'Tư vấn đầu tư' };
