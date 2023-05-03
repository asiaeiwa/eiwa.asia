import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BoxTitle } from '.';

export default {
  title: 'Components/BoxTitle',
  component: BoxTitle,
} as ComponentMeta<typeof BoxTitle>;

const Template: ComponentStory<typeof BoxTitle> = args => <BoxTitle {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'Hot news', children: 'Lorem ipsum dolor.' };

export const Other = Template.bind({});
Other.args = { title: 'Service packages', children: 'Lorem, ipsum dolor.' };
