import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Link } from 'components/link';
import { Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      This line of text is meant to be treated as peted text. You can use the mark tag to <mark>highlight</mark> text.
      <br />
      <del>This line of text is meant to be treated as deleted text.</del>
      <br />
      <s>This line of text is meant to be treated as no longer accurate.</s>
      <br />
      <ins>This line of text is meant to be treated as an addition to the document.</ins>
      <br />
      <u>This line of text will render as underlined</u>
      <br />
      <small>This line of text is meant to be treated as fine print.</small>
      <br />
      <strong>This line rendered as bold text.</strong>
      <br />
      <b>This line rendered as bold text.</b>
      <br />
      <em>This line rendered as italicized text.</em>
      <br />
      For quoting blocks of content from another source within your document. Wrap{' '}
      <code>&lt;blockquote class=&quot;blockquote&quot;&gt;</code> around any HTML as the quote.
      <br />
      Link: <Link href="#">Click here</Link>
    </>
  ),
};
