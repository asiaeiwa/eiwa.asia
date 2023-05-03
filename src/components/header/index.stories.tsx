import { ComponentMeta, ComponentStory } from '@storybook/react';
import { MenuList } from 'libs/constants';

import { Header } from '.';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = { menuList: MenuList };
