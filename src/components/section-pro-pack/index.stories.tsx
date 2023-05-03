import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { SectionProPack } from '.';

export default {
  title: 'Components/SectionProPack',
  component: SectionProPack,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof SectionProPack>;

const Template: ComponentStory<typeof SectionProPack> = args => <SectionProPack {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'pro service pack',
  button: (
    <Button tag="a" href="#">
      Read more
    </Button>
  ),
  items: [
    {
      imgSrc: '/images/product/pro-1.jpg',
      name: 'Amet eu facilisi posuere ut at cras non ipsum proin',
    },
    {
      imgSrc: '/images/product/pro-1.jpg',
      name: 'Emu facilisi posuere ut at cras non ipsum proin',
    },
    {
      imgSrc: '/images/product/pro-1.jpg',
      name: 'Fasacilisi posuere ut at cras non ipsum proin',
    },
  ],
};
