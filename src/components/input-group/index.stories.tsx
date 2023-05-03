import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputGroup } from '.';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
} as ComponentMeta<typeof InputGroup>;

const Template: ComponentStory<typeof InputGroup> = args => <InputGroup {...args} />;

export const Normal = Template.bind({});
Normal.args = { label: 'Your name:', placeholder: 'Enter your full name' };

export const File = Template.bind({});
File.args = { label: 'Your CV:', placeholder: 'Select your CV...', type: 'file' };

export const Error = Template.bind({});
Error.args = {
  label: 'Your name:',
  placeholder: 'Enter your full name',
  errorMessage: '*  Can’t be blank',
  isError: true,
};

export const Multi = Template.bind({});
Multi.args = {
  label: 'Introduce:',
  placeholder: 'Introduce yourself and work experience... ',
  isMultiLine: true,
  rows: 5,
};
