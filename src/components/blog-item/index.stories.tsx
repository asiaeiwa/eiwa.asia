import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlogItem } from '.';

export default {
  title: 'Components/BlogItem',
  component: BlogItem,
} as ComponentMeta<typeof BlogItem>;

const Template: ComponentStory<typeof BlogItem> = args => <BlogItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  imgSrc: '/images/blog/image-2.jpeg',
  date: '2021-05-23',
  title: 'How to Write A Business Plan – Starting A Business beginning',
  sub: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam',
};

export const Big = Template.bind({});
Big.args = {
  modifiers: 'big',
  imgSrc: '/images/blog/image-1.jpeg',
  date: '2021-05-23',
  title: 'How to Write A Business Plan – Starting A Business beginning',
  sub: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. ut aliquip ex ea commodo consequat.',
};

export const Small = Template.bind({});
Small.args = {
  modifiers: 'small',
  imgSrc: '/images/blog/image-2.jpeg',
  date: '2021-05-23',
  title: 'How to Write A Business Plan – Starting A Business beginning',
  sub: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam',
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  modifiers: 'horizontal',
  imgSrc: '/images/blog/hot-new-1.jpeg',
  date: '2021-05-23',
  title: 'The Study Shows Who the Leading Who the Leading',
  sub: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam',
};
