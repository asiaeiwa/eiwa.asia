import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NameCardTemplate } from '.';

export default {
  title: 'Components/Templates/NameCardTemplate',
  component: NameCardTemplate,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof NameCardTemplate>;

const Template: ComponentStory<typeof NameCardTemplate> = args => <NameCardTemplate {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'Lorem ipsum dolor.' };
