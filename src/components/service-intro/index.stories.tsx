import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'components/text';
import { ServiceIntro } from '.';

export default {
  title: 'Components/ServiceIntro',
  component: ServiceIntro,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof ServiceIntro>;

const Template: ComponentStory<typeof ServiceIntro> = args => <ServiceIntro {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Operational management in SMES',
  imgSrc: '/images/services/enterprise-solutions/intro-bg.jpeg',
  children: (
    <Text>
      Our seasoned consultants stand ready to give expert advice to help your business improve operational efficiency on
    </Text>
  ),
};
