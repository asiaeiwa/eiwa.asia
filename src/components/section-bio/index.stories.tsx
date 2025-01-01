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
  phone: '+84909 123 123',
  email: 'example@gmail.com',
  social: {
    facebook: 'https://fb.com/dummy',
    linkedin: 'https://linkedin.com/dummy',
    youtube: 'https://youtube.com/dummy',
    zalo: 'https://zalo.com/dummy',
    instagram: 'https://instagram.com/dummy',
    twitter: 'https://twitter.com/dummy',
    tiktok: 'https://tiktok.com/dummy',
  },
  vcardSrc: 'https://dummy.com',
};
