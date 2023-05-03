import { Meta, Story } from '@storybook/react/types-6-0';
import { Heading, HeadingProps } from './';

export default {
  title: 'components/Heading',
  component: Heading,
} as Meta;

const Template: Story<HeadingProps> = args => <Heading {...args} />;

export const H1 = Template.bind({});
H1.args = { tag: 'h1', modifiers: ['page', 'border-bottom'], children: 'Blog / News' };
H1.storyName = '<h1>';

export const H2 = Template.bind({});
H2.args = { tag: 'h2', modifiers: ['section', 'border-inline'], children: 'Intro service pack' };
H2.storyName = '<h2>';

export const H3 = Template.bind({});
H3.args = { tag: 'h3', children: 'Manage your plan' };
H3.storyName = '<h3>';

export const H4 = Template.bind({});
H4.args = { tag: 'h4', children: 'Heading' };
H4.storyName = '<h4>';

export const H5 = Template.bind({});
H5.args = { tag: 'h5', children: 'Heading' };
H5.storyName = '<h5>';

export const H6 = Template.bind({});
H6.args = { tag: 'h6', children: 'Heading' };
H6.storyName = '<h6>';
