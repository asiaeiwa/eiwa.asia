import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ServiceItem } from 'components/service-item';
import { SectionService } from '.';

export default {
  title: 'Components/SectionService',
  component: SectionService,
} as ComponentMeta<typeof SectionService>;

const Template: ComponentStory<typeof SectionService> = args => <SectionService {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Service',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page',
  children: [
    <ServiceItem imgSrc="/images/home/service-investment.svg" title="Tư vấn đầu tư" key={1} />,
    <ServiceItem imgSrc="/images/home/service-it.svg" title="Tư vấn IT" key={2} />,
    <ServiceItem imgSrc="/images/home/service-offshore.svg" title="Offshore" key={3} />,
  ],
};
