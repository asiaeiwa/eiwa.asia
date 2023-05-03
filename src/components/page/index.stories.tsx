import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Page } from '.';

export default {
  title: 'Components/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = args => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = { children: 'Lorem ipsum dolor.' };
