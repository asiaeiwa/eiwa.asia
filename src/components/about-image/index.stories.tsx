import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AboutImage } from '.';

export default {
  title: 'Components/AboutImage',
  component: AboutImage,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof AboutImage>;

const Template: ComponentStory<typeof AboutImage> = args => <AboutImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  quote: '“It is a long established fact that a reader will be distracted by the readable content of a page.”',
  imgSrc: '/images/about/ms-anh-01.jpg',
  position: 'Founder',
  name: 'Ngo Thi Huynh Anh',
};
