import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { JobItem } from '.';

export default {
  title: 'Components/JobItem',
  component: JobItem,
} as ComponentMeta<typeof JobItem>;

const Template: ComponentStory<typeof JobItem> = args => <JobItem {...args} />;

export const Recent = Template.bind({});
Recent.args = {
  imgSrc: '/images/career/fe.jpg',
  title: 'Software Development Project Manager',
  salary: { from: 2000, to: 3000 },
  type: 'Full time',
  href: '#',
};

export const Hot = Template.bind({});
Hot.args = {
  modifiers: 'hot',
  imgSrc: '/images/career/pm.jpg',
  title: 'Software Development Project Manager',
  location: '4517 Washington Ave. Manchester, Kentucky 39495',
  salary: { from: 2000, to: 3000 },
  type: 'Full time',
  children:
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
  button: <Button>Apply for this job</Button>,
  href: '#',
};
