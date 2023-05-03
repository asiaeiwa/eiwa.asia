import { Meta, Story } from '@storybook/react';
import { Heading } from '../../src/components/heading';

// @ts-ignore
import readme from '../../README.md';
import { useEffect } from 'react';

export default {
  title: 'ASIA EIWA Storybook',
  parameters: { backgrounds: { default: 'gray' } },
} as Meta;

export const Welcome: Story = args => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js';
    script.onload = () => {
      const scriptRun = document.createElement('script');
      scriptRun.innerText = 'hljs.highlightAll();';
      document.body.appendChild(scriptRun);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      <section>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/atom-one-dark.min.css"
        />
        <Heading tag="h1">Dự án EIWA-BUSINESS-WEB</Heading>
        <div>
          <pre>
            <code className="hljs markdown">{readme}</code>
          </pre>
        </div>
      </section>
    </main>
  );
};
