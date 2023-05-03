import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from 'components/link';
import { Text } from 'components/text';
import { SectionVision } from '.';

export default {
  title: 'Components/SectionVision',
  component: SectionVision,
} as ComponentMeta<typeof SectionVision>;

const Template: ComponentStory<typeof SectionVision> = args => <SectionVision {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  imgSrc: '/images/home/vision-1.jpg',
  title: 'Vision',
  children: (
    <Text>It is a long established fact that a reader will be distracted by the readable content of a page</Text>
  ),
  link: <Link modifiers="arrow">More</Link>,
};

export const Invert = Template.bind({});
Invert.args = {
  imgSrc: '/images/home/vision-2.jpg',
  title: 'Mission',
  children: [
    <Text key={1}>It is a long established fact that a reader will be distracted by</Text>,
    <Text key={2}>The readable content of a page when looking at its layout. </Text>,
    <Text key={3}>The point of using Lorem Ipsum is that it has a more-or-less normal</Text>,
  ],
  modifiers: 'invert',
  link: <Link modifiers="arrow">More</Link>,
};
