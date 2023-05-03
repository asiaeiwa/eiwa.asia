import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OptimiseItem } from '.';

export default {
  title: 'Components/OptimiseItem',
  component: OptimiseItem,
  parameters: { backgrounds: { default: 'white' } },
  args: {
    srcImg: '/images/home/optimization-01.svg',
    heading: 'Digitize and Standardize',
    desc: 'Makes process standard easier for managers. At the same time, digitize sales management and customer care processes.',
  },
} as ComponentMeta<typeof OptimiseItem>;

const Template: ComponentStory<typeof OptimiseItem> = args => <OptimiseItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
