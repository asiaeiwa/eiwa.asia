/* eslint-disable @typescript-eslint/no-var-requires */

const replace = require('replace');
const fs = require('fs-extra');

const pathBuild = 'build/';

// Replace for hosting
replace({
  regex: '/_next/static/',
  replacement: '/assets/',
  paths: [pathBuild],
  recursive: true,
  silent: true,
  include: '*.html,*.css,*.js',
});

replace({
  regex: 'static/',
  replacement: '',
  paths: [pathBuild],
  recursive: true,
  silent: true,
  include: '_buildManifest.js',
});

replace({
  regex: '/_next/',
  replacement: '/assets/',
  paths: [pathBuild],
  recursive: true,
  silent: true,
  include: 'main-*.js',
});

async function moveFiles() {
  try {
    await fs.move('./build/_next/static/', './build/assets');
    await fs.remove('./build/_next/');
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

moveFiles();
