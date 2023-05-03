import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BlogItem } from 'components/blog-item';
import { BlogRelated } from '.';

export default {
  title: 'Components/BlogRelated',
  component: BlogRelated,
} as ComponentMeta<typeof BlogRelated>;

const Template: ComponentStory<typeof BlogRelated> = args => <BlogRelated {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'You may like these too',
  children: [
    <BlogItem
      key={1}
      date="2021-05-23"
      imgSrc="/images/blog/image-2.jpeg"
      modifiers="small"
      sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
      title="How to Write A Business Plan – Starting A Business beginning"
      href="#"
    />,
    <BlogItem
      key={2}
      date="2021-05-23"
      imgSrc="/images/blog/image-3.jpeg"
      modifiers="small"
      sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
      title="How to Write A Business Plan – Starting A Business beginning"
      href="#"
    />,
    <BlogItem
      key={3}
      date="2021-05-23"
      imgSrc="/images/blog/image-4.jpeg"
      modifiers="small"
      sub="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam laoreet dolore magna aliquam"
      title="How to Write A Business Plan – Starting A Business beginning"
      href="#"
    />,
  ],
};
