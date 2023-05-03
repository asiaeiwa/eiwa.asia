import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { CheckList } from 'components/check-list';
import { PackItem } from '.';

export default {
  title: 'Components/PackItem',
  component: PackItem,
} as ComponentMeta<typeof PackItem>;

const Template: ComponentStory<typeof PackItem> = args => <PackItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  price: '20',
  title: 'Base',
  button: (
    <Button modifiers="outline" tag="a" href="#">
      Choose plan
    </Button>
  ),
  children: (
    <CheckList
      items={['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']}
    />
  ),
};

export const Cate = Template.bind({});
Cate.args = {
  title: 'Quản lý sản xuất',
  button: (
    <Button modifiers="outline" tag="a" href="#">
      View Detail
    </Button>
  ),
  children: (
    <CheckList
      items={['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']}
    />
  ),
  modifiers: 'cate',
};

export const Highlight = Template.bind({});
Highlight.args = {
  modifiers: 'highlight',
  price: '100',
  title: 'Pro',
  desc: 'For most businesses that want to optimize web queries',
  button: <Button modifiers={['pink']}>Choose plan</Button>,
  tag: 'MOST POPULAR',
  children: (
    <CheckList
      modifiers="white"
      items={['All limited links', 'Own analytics platform', 'Chat support', 'Optimize hashtags', 'Unlimited users']}
    />
  ),
};

export const Small = Template.bind({});
Small.args = {
  modifiers: 'small',
  price: '20',
  title: 'Intro',
  desc: 'For most businesses that want to optimize web queries',
  button: <Button modifiers={['outline', 'pink']}>Choose plan</Button>,
};

export const SmallHighlight = Template.bind({});
SmallHighlight.args = {
  modifiers: ['small', 'highlight'],
  price: '100',
  title: 'Pro',
  desc: 'For most businesses that want to optimize web queries',
  button: <Button modifiers={['pink']}>Choose plan</Button>,
  tag: 'MOST POPULAR',
};
