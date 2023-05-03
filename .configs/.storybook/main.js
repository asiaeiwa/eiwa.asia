const path = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  core: { builder: 'webpack5' },
  stories: ['*.stories.tsx', '../../src/**/*.stories.tsx'],
  staticDirs: ['../../public'],
  addons: [
    // Addons list
    '@storybook/addon-essentials',
    'storybook-addon-paddings',
    'storybook-dark-mode',
    '@whitespace/storybook-addon-html',
  ],
  features: { postcss: false },
  webpackFinal: async config => {
    if (!config.module) {
      return config;
    }

    config.resolve.plugins = [
      new TsconfigPathsWebpackPlugin({ configFile: path.resolve(__dirname, '../../tsconfig.json') }),
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      'next/router': path.resolve(__dirname, './mocks/next.router.js'),
      'next-i18next': 'react-i18next',
    };

    config.resolveLoader = {
      alias: {
        'sass-loader': 'next/dist/compiled/sass-loader/cjs.js',
      },
    };

    // SCSS: Support NON-module
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      exclude: /\.module\.scss$/,
    });

    // SCSS: Support module
    config.module.rules.push({
      sideEffects: false,
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader?modules&importLoaders',
          options: { modules: { localIdentName: '[local]' } },
        },
        'resolve-url-loader',
        'sass-loader',
      ],
    });

    return config;
  },
};
