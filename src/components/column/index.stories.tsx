import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Column } from '.';

export default {
  title: 'Components/Column',
  component: Column,
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi voluptatum qui quasi laboriosam
        architecto unde harum aut, libero asperiores provident recusandae commodi repellat, iste error ut dolore veniam
        neque?
      </p>
    ),
  },
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = args => <Column {...args} />;

export const Normal = Template.bind({});

export const Col3 = Template.bind({});
Col3.args = { col: 3 };
