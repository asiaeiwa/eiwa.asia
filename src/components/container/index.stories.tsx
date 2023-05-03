import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from '.';

export default {
  title: 'Components/Container',
  component: Container,
  parameters: { paddings: { default: 'None' } },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = args => <Container {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nisi fuga dolorum error cupiditate ducimus molestias
      ipsum aut! Porro aspernatur velit facilis odio maiores, excepturi praesentium. Dolorum impedit doloremque
      possimus.
    </div>
  ),
};
