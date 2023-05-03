import { I18nextProvider } from 'react-i18next';
import 'styles/index.scss';
import i18n from './i18n';
const { eiwaThemeDark: dark, eiwaThemeLight: light } = require('./eiwa-theme');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: false,
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'iPhone X',
        styles: {
          width: '375px',
          height: '812px',
        },
      },
      tablet: {
        name: 'iPad',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      laptop: {
        name: 'Laptop',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '1024px',
        },
      },
    },
  },
  backgrounds: {
    default: 'gray',
    values: [
      {
        name: 'gray',
        value: '#eeeeee',
      },
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'blue',
        value: '#0A406B',
      },
    ],
  },
  paddings: {
    values: [
      { name: 'None', value: '0' },
      { name: 'Small', value: '16px' },
      { name: 'Medium', value: '32px' },
      { name: 'Large', value: '64px' },
    ],
    default: 'Medium',
  },
  darkMode: {
    current: 'dark',
    stylePreview: true,
    dark,
    light,
  },
  html: {
    prettier: {
      tabWidth: 2,
      useTabs: false,
    },
    highlighter: {
      showLineNumbers: true,
      wrapLines: true,
    },
  },
};

export const globalTypes = {
  lang: {
    name: 'Lang',
    description: 'Languages',
    defaultValue: 'vi',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'vi', left: '🇻🇳', title: 'Việt Nam' },
        { value: 'ja', left: '🇯🇵', title: '日本' },
        { value: 'en', left: '🇺🇸', title: 'English' },
      ],
      showName: false,
    },
  },
};

export const decorators = [
  (Story, context) => {
    i18n.changeLanguage(context.globals.lang);
    return (
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    );
  },
];
