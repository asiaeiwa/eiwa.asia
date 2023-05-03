import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from 'components/button';
import { CheckList } from 'components/check-list';
import { PackItem } from 'components/pack-item';
import { SectionProduct } from '.';

export default {
  title: 'Components/SectionProduct',
  component: SectionProduct,
} as ComponentMeta<typeof SectionProduct>;

const Template: ComponentStory<typeof SectionProduct> = args => <SectionProduct {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Product',
  desc: 'It is a long established fact that a reader will be distracted by the readable content of a page ',
  children: [
    <PackItem
      title="Quản lý sản xuất"
      modifiers="cate"
      button={
        <Button modifiers="outline" tag="a" href="#">
          View Detail
        </Button>
      }
      key={1}
    >
      <CheckList
        items={[
          'All limited links',
          'Own analytics platform',
          'Chat support',
          'Optimize hashtags',
          'Unlimited users',
          'Standard information management',
        ]}
      />
    </PackItem>,
    <PackItem
      title="Quản lý sản xuất"
      modifiers="cate"
      button={
        <Button modifiers="outline" tag="a" href="#">
          View Detail
        </Button>
      }
      key={2}
    >
      <CheckList
        items={[
          'All limited links',
          'Own analytics platform',
          'Chat support',
          'Optimize hashtags',
          'Unlimited users',
          'Standard information management',
        ]}
      />
    </PackItem>,
    <PackItem
      title="Quản lý sản xuất"
      modifiers="cate"
      button={
        <Button modifiers="outline" tag="a" href="#">
          View Detail
        </Button>
      }
      key={3}
    >
      <CheckList
        items={[
          'All limited links',
          'Own analytics platform',
          'Chat support',
          'Optimize hashtags',
          'Unlimited users',
          'Standard information management',
        ]}
      />
    </PackItem>,
  ],
};
