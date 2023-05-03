import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Partner } from 'components/partner';
import { ASIAEIWA } from 'libs/constants';
import { SectionPartner } from '.';

export default {
  title: 'Components/SectionPartner',
  component: SectionPartner,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof SectionPartner>;

const Template: ComponentStory<typeof SectionPartner> = args => <SectionPartner {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <Partner key={1} alt={ASIAEIWA} />,
    <Partner key={2} alt={ASIAEIWA} />,
    <Partner key={3} alt={ASIAEIWA} />,
    <Partner key={4} alt={ASIAEIWA} />,
    <Partner key={5} alt={ASIAEIWA} />,
  ],
};
