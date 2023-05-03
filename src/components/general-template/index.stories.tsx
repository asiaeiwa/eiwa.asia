import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GeneralTemplate } from '.';

export default {
  title: 'Components/GeneralTemplate',
  component: GeneralTemplate,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof GeneralTemplate>;

const Template: ComponentStory<typeof GeneralTemplate> = args => <GeneralTemplate {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'Lorem ipsum dolor.' };

export const PaddingBottom = Template.bind({});
PaddingBottom.args = { modifiers: 'padding-bottom', children: 'xx' };
