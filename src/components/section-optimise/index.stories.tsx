import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OptimiseItem } from 'components/optimise-item';
import { SectionOptimise } from '.';

export default {
  title: 'Components/SectionOptimise',
  component: SectionOptimise,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof SectionOptimise>;

const Template: ComponentStory<typeof SectionOptimise> = args => <SectionOptimise {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Optimization of business features',
  desc: 'Optimized scalability for all types and sizes of business operations. Ability to integrate all operations according to the needs of each business with a reasonable budget. At the same time, businesses can easily upgrade.',
  children: [
    <OptimiseItem
      key={1}
      desc="Makes process standard easier for managers. At the same time, digitize sales management and customer care processes."
      heading="Digitize and Standardize 1"
    />,
    <OptimiseItem
      key={2}
      desc="Makes process standard easier for managers. At the same time, digitize sales management and customer care processes."
      heading="Digitize and Standardize 2"
    />,
    <OptimiseItem
      key={3}
      desc="Makes process standard easier for managers. At the same time, digitize sales management and customer care processes."
      heading="Digitize and Standardize 3"
    />,
    <OptimiseItem
      key={4}
      desc="Makes process standard easier for managers. At the same time, digitize sales management and customer care processes."
      heading="Digitize and Standardize 4"
    />,
    <OptimiseItem
      key={5}
      desc="Makes process standard easier for managers. At the same time, digitize sales management and customer care processes."
      heading="Digitize and Standardize 5"
    />,
    <OptimiseItem
      key={6}
      desc="Makes process standard easier for managers. At the same time, digitize sales management and customer care processes."
      heading="Digitize and Standardize 6"
    />,
  ],
};
