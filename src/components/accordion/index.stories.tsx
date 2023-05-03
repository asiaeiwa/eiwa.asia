import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Accordion, AccordionItem } from '.';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: { backgrounds: { default: 'blue' } },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Security & private',
  children: [
    <AccordionItem title="How to invite team members?" key={1}>
      We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources
      to energize your creative workflow.
    </AccordionItem>,
    <AccordionItem title="Which platform do you support?" key={2}>
      We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources
      to energize your creative workflow.
    </AccordionItem>,
    <AccordionItem title="How does it work?" key={3}>
      We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources
      to energize your creative workflow.
    </AccordionItem>,
    <AccordionItem title="Change password" key={4}>
      We&apos;re a growing family of 382,081 designers and makers from around the world. 4,730 curated design resources
      to energize your creative workflow.
    </AccordionItem>,
  ],
};
