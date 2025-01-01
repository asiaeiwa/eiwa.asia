import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SectionBio } from '.';

export default {
  title: 'Components/SectionBio',
  component: SectionBio,
} as ComponentMeta<typeof SectionBio>;

const Template: ComponentStory<typeof SectionBio> = args => <SectionBio {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  // abc
  imgSrc: 'https://via.placeholder.com/140x100',
  name: 'Ngo Thi Huynh Anh',
  position: 'Founder',
};
