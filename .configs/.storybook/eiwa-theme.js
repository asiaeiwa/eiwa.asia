import { themes, create } from '@storybook/theming';
import { ASIAEIWA } from '../../src/libs/constants';
import logoWorkSpace from '../../src/assets/images/eiwa-workspace.png'; // 350 x 150

const eiwaBrand = {
  brandTitle: ASIAEIWA,
  brandUrl: 'https://eiwa.asia',
  brandImage: logoWorkSpace,
  barSelectedColor: '#ef446d',
  colorSecondary: '#ef446d',
  fontBase:
    '"Open Sans", "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif',
};

export const eiwaThemeDark = create({
  ...themes.dark,
  ...eiwaBrand,
});

export const eiwaThemeLight = create({
  ...themes.light,
  ...eiwaBrand,
});
