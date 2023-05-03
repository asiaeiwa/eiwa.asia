import { Meta, Story } from '@storybook/react/types-6-0';
import { Icon, IconProps } from './';

export default {
  title: 'components/Icon',
  component: Icon,
} as Meta;

const Template: Story<IconProps> = args => <Icon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = { href: '#', modifiers: ['facebook', 'social'] };

export const Mail = Template.bind({});
Mail.args = { href: '#', modifiers: ['mail', 'social'] };

export const Linkedin = Template.bind({});
Linkedin.args = { href: '#', modifiers: ['linkedin', 'social'] };

export const Twitter = Template.bind({});
Twitter.args = { href: '#', modifiers: ['twitter', 'social'] };

export const Calendar = Template.bind({});
Calendar.args = { modifiers: 'calendar' };

export const Clock = Template.bind({});
Clock.args = { modifiers: 'clock' };

export const Location = Template.bind({});
Location.args = { modifiers: 'location' };

export const Profile = Template.bind({});
Profile.args = { modifiers: 'profile' };

export const Salary = Template.bind({});
Salary.args = { modifiers: 'salary' };

export const Close = Template.bind({});
Close.args = { modifiers: 'close' };
