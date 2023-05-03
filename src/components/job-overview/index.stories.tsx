import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { JobOverview } from '.';

export default {
  title: 'Components/JobOverview',
  component: JobOverview,
} as ComponentMeta<typeof JobOverview>;

const Template: ComponentStory<typeof JobOverview> = args => <JobOverview {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  dateExp: 'April 15, 2023',
  location: '4517 Washington Ave. Manchester, Kentucky 39495',
  title: 'Software Development Project Manager',
  salary: { from: 2000, to: 3000 },
  button: <Button>Apply for this job</Button>,
};
