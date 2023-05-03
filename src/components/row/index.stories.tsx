import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Row } from '.';
import { Column } from 'components/column';

export default {
  title: 'Components/Row',
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = args => <Row {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: [
    <Column key={1} col={4}>
      <p>4/12</p>
    </Column>,
    <Column key={2} col={4}>
      <p>4/12</p>
    </Column>,
    <Column key={3} col={4}>
      <p>4/12</p>
    </Column>,
  ],
};

export const Gutter = Template.bind({});
Gutter.args = {
  gutter: '24',
  children: [
    <Column key={1} col={8}>
      <p>4/12</p>
    </Column>,
    <Column key={2} col={4}>
      <p>8/12</p>
    </Column>,
  ],
};
