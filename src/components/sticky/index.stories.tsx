import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { Sticky } from '.';

export default {
  title: 'Components/Sticky',
  component: Sticky,
} as ComponentMeta<typeof Sticky>;

const Template: ComponentStory<typeof Sticky> = args => <Sticky {...args} />;

export const Normal = Template.bind({});
Normal.args = { title: 'Intro service pack', price: '$20', button: <Button>Choose plan</Button> };
