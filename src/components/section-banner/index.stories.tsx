import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from 'components/text';
import { SectionBanner } from '.';

export default {
  title: 'Components/SectionBanner',
  component: SectionBanner,
} as ComponentMeta<typeof SectionBanner>;

const Template: ComponentStory<typeof SectionBanner> = args => <SectionBanner {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  imgSrc: '/images/home/intro.jpg',
  children: (
    <Text>
      Let EIWA make technology easy for you. By providing software solutions and meeting the technology needs of
      businesses, EIWA promises to fully meet the needs of businesses, and at the same time bring valuable digital
      values.
    </Text>
  ),
};
