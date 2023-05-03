import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { SectionPack } from '.';

export default {
  title: 'Components/SectionPack',
  component: SectionPack,
  parameters: { backgrounds: { default: 'white' }, paddings: { default: 'None' } },
} as ComponentMeta<typeof SectionPack>;

const Template: ComponentStory<typeof SectionPack> = args => <SectionPack {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Intro,Base service pack',
  children: (
    <Text>
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit.
      <br />
      <br />
      Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
      mollit.
    </Text>
  ),
  button: (
    <Button tag="a" href="#" modifiers={['pink']}>
      Read more
    </Button>
  ),
  checkList: ['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users'],
  imgSrc: '/images/product/image-1.png',
};
