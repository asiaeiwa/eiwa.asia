import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumb } from '.';
import { Link } from 'components/link';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = args => <Breadcrumb {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <Link href="#" key={1}>
      Home
    </Link>,
    <Link href="#" key={2}>
      Blogs
    </Link>,
  ],
};
