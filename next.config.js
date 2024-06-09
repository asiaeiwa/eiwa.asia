/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config');

const isProduction = process.env.NODE_ENV === 'production';
const isFullClass = (!isProduction && process.env.ASBUILD !== 'true') || process.env.FULLCLASS === 'true';
const isAnalyze = process.env.ANALYZE === 'true';
const isTSCheck = process.env.TSCHECK || process.env.TSCHECK === 'true';
const hashLength = process.env.HASHLENGTH || 5;

const mapHash = { fisrt: '' };

const concatHash = (value, length = 0) => {
  if (mapHash[value]) return mapHash[value];
  let f = '';
  let count = 0;
  while (Object.values(mapHash).includes(f)) {
    const hash = Buffer.from(count > 0 ? `${value}${count}` : value)
      .toString('base64')
      .replace(/=/g, '')
      .toLowerCase();
    if (hash.length < length) return hash;
    const c = hash.substring(hash.length - length, hash.length);
    f = /\d/.test(c[0]) ? '_' + c : c;
    count++;
  }
  mapHash[value] = f;
  return f;
};

let configs = {
  compress: true,
  excludeFile: str => /\*.{spec,test,stories}.{ts,tsx}/.test(str),
  generateEtags: true,
  i18n,
  images: { domains: ['via.placeholder.com'], loader: isProduction ? 'custom' : 'default' },
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: isTSCheck },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (configs, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    configs.module.rules
      .find(rule => Array.isArray(rule.oneOf))
      .oneOf.filter(rule => /css/.test(rule.test) && Array.isArray(rule.use))
      .forEach(moduleLoader => {
        if (Array.isArray(moduleLoader.use)) {
          moduleLoader.use.forEach(item => {
            if (item.loader.includes('css-loader') && !item.loader.includes('postcss-loader') && item.options.modules) {
              item.options.modules.getLocalIdent = (_context, _localIdentName, localName) =>
                isFullClass ? localName : concatHash(localName, hashLength);
            }
          });
        }
      });

    return configs;
  },
};

if (isAnalyze) {
  configs = require('@next/bundle-analyzer')({ enabled: true })(configs);
}

module.exports = configs;
