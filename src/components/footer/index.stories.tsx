import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from '.';
import { MenuList } from 'libs/constants';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => <Footer {...args} />;

export const Normal = Template.bind({});
Normal.args = { menuList: MenuList };
