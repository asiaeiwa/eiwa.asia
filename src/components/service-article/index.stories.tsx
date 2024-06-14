import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'components/text';
import { ServiceArticle } from '.';

export default {
  title: 'Components/ServiceArticle',
  component: ServiceArticle,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof ServiceArticle>;

const Template: ComponentStory<typeof ServiceArticle> = args => <ServiceArticle {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Back Office',
  children: (
    <>
      <Text>Define the approach context and scope of your business requirements.</Text>
      <ul>
        <li>Design a plan in conjunction with your business.</li>
        <li>Guide and support your business during deployment.</li>
      </ul>
    </>
  ),
  imgSrc: '/images/services/enterprise-solutions/image-1.jpg',
};

export const Invert = Template.bind({});
Invert.args = {
  modifiers: 'invert',
  title: 'Warehouse',
  children: (
    <ul>
      <li>Warehouse assessment.</li>
      <li>Detect storage problems , inventory management issues, and poor use of vertical space. </li>
      <li>Review and develop a detailed improvement plan.</li>
    </ul>
  ),
  imgSrc: '/images/services/enterprise-solutions/image-2.jpg',
};
