import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Map } from '.';

export default {
  title: 'Components/Map',
  component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = args => <Map {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19449.649827257967!2d106.66692102973514!3d10.779678847765137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed06e6aaa85%3A0xc341b71f91a92511!2zMTDCsDQ2JzUxLjIiTiAxMDbCsDM5JzU5LjIiRQ!5e0!3m2!1sen!2s!4v1632793770576!5m2!1sen!2s',
  height: 550,
};
