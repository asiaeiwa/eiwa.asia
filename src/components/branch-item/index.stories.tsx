import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Map } from 'components/map';
import { BranchItem } from '.';

export default {
  title: 'Components/BranchItem',
  component: BranchItem,
} as ComponentMeta<typeof BranchItem>;

const Template: ComponentStory<typeof BranchItem> = args => <BranchItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  imgSrc: '/images/contact/hcm.jpeg',
  title: 'Ho Chi Minh City',
  address: 'Lim Tower Building, 25th Floor, No. 9-11, Ton Duc Thang Street, Ben Nghe Ward, District 1',
  tel: '043 6930 305',
  email: 'contact@eiwa.asia',
  children: (
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19449.649827257967!2d106.66692102973514!3d10.779678847765137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed06e6aaa85%3A0xc341b71f91a92511!2zMTDCsDQ2JzUxLjIiTiAxMDbCsDM5JzU5LjIiRQ!5e0!3m2!1sen!2s!4v1632793770576!5m2!1sen!2s"
      height={242}
    />
  ),
};
