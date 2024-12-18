/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const DOMAIN = 'https://eiwa.asia';

const replace = require('replace');
const fs = require('fs-extra');
const globby = require('globby');
const prettier = require('prettier');
const path = require('path');
const BUILD_ID = fs.readFileSync('.next/BUILD_ID', 'utf8');

const {
  i18n: { locales, defaultLocale },
} = require('../../next-i18next.config');

const pathBuild = './build/';

async function moveFiles() {
  try {
    // Remove Build folder
    await fs.remove(pathBuild);

    // Static
    await fs.copy('public', pathBuild, { filter: filter => !/^public\/locales/.test(filter) });
    await fs.copy('.next/static/', `${pathBuild}assets`);

    // Default
    await fs.copy(`.next/server/pages/${defaultLocale}.html`, `${pathBuild}index.html`);
    await fs.copy(`.next/server/pages/${defaultLocale}/404.html`, `${pathBuild}/404.html`);
    await fs.copy(`.next/server/pages/${defaultLocale}/500.html`, `${pathBuild}/500.html`);

    // Main
    await fs.copy(`.next/server/pages/${defaultLocale}.html`, `${pathBuild}index.html`);
    const mainPages = await globby([path.resolve(__dirname, `../../.next/server/pages/${defaultLocale}`)]);
    for (const page of mainPages) {
      if (page.indexOf('.json') > 0 || page.indexOf('404') > 0 || page.indexOf('500') > 0) continue;
      await fs.copy(page, page.replace(`.next/server/pages/${defaultLocale}`, 'build').replace('.html', '/index.html'));
    }

    // Muti-languages
    for (const lang of locales) {
      await fs.copy(`.next/server/pages/${lang}.html`, `${pathBuild}${lang}/index.html`);
      const langPages = await globby([path.resolve(__dirname, `../../.next/server/pages/${lang}`)]);
      for (const page of langPages) {
        if (page.indexOf('.json') > 0 || page.indexOf('404') > 0 || page.indexOf('500') > 0) continue;
        await fs.copy(page, page.replace(`.next/server/pages`, 'build').replace('.html', '/index.html'));
      }
    }

    // Locale
    for (const lang of locales) {
      await fs.copy(`.next/server/pages/${lang}.json`, `${pathBuild}data/${lang}.json`, {
        filter: filter => /.json$/.test(filter),
      });
      await fs.copy(`.next/server/pages/${lang}/`, `${pathBuild}data/${lang}/`, {
        filter: filter => !/.html$/.test(filter),
      });
    }
  } catch (err) {
    console.error(err);
  }
}

async function replaceFile() {
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
    paths: [`${pathBuild}assets/chunks/`],
    recursive: true,
    silent: true,
    include: 'main-*.js',
  });

  replace({
    regex: '/assets/data/".concat\\(*..buildId\\)',
    replacement: '/data"',
    paths: [`${pathBuild}/assets/chunks/`],
    recursive: true,
    silent: true,
    include: 'main-*.js',
  });
}

async function detectGithubBuilder() {
  const NEW_BUILD_ID = `manifest-${new Date().getTime()}`;
  replace({
    regex: 'chunks/pages/_',
    replacement: 'chunks/pages/',
    paths: [pathBuild],
    recursive: true,
    silent: true,
    include: '*.html,*.js',
  });

  replace({
    regex: `${BUILD_ID}/_`,
    replacement: `${NEW_BUILD_ID}/`,
    paths: [pathBuild],
    recursive: true,
    silent: true,
    include: '*.html',
  });

  replace({
    regex: BUILD_ID,
    replacement: NEW_BUILD_ID,
    paths: [pathBuild],
    recursive: true,
    silent: true,
    include: '*.html,*js,*.css',
  });

  await fs.rename(`./build/assets/${BUILD_ID}`, `./build/assets/${NEW_BUILD_ID}`);
  const htmlFind = await fs.readFile('build/404.html', 'utf8');
  const appID = /pages\/app-([_a-zA-Z0-9]+)\.js/.exec(htmlFind)[1];
  const errorID = /pages\/error-([_a-zA-Z0-9]+)\.js/.exec(htmlFind)[1];
  const folder = './build/assets';
  await fs.rename(`${folder}/chunks/pages/_app-${appID}.js`, `${folder}/chunks/pages/app-${appID}.js`);
  await fs.rename(`${folder}/chunks/pages/_error-${errorID}.js`, `${folder}/chunks/pages/error-${errorID}.js`);
  await fs.rename(`${folder}/${NEW_BUILD_ID}/_buildManifest.js`, `${folder}/${NEW_BUILD_ID}/buildManifest.js`);
  await fs.rename(`${folder}/${NEW_BUILD_ID}/_ssgManifest.js`, `${folder}/${NEW_BUILD_ID}/ssgManifest.js`);
  await fs.remove(`./docs`);
  await fs.rename(`./build`, `./docs`);
}

function addPage(page) {
  const host = DOMAIN;
  const changefreq = 'monthly';
  const priority = '1.0';

  const url = page.replace(path.resolve(__dirname, '../../build/'), '').replace('index.html', '');
  const route = url === '/index' ? '' : url;
  return `  <url>
    <loc>${host}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  const pages = await globby([path.resolve(__dirname, '../../build/**/*.html'), '!**/404.html', '!**/500.html']);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>`;

  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });
  fs.writeFileSync('build/sitemap.xml', sitemap, { formatted });
  console.log(
    '\033[34minfo\033[0m  - Generating \033[33mSitemap\033[0m to \033[33m' + pathBuild + 'sitemap.xml\033[0m file'
  );
}

async function exportFiles() {
  console.log('\x1b[36mCustom Export: \033[32mStarting...\033[0m');
  console.log('\033[34minfo\033[0m  - BUILD ID: \033[33m' + BUILD_ID + '\033[0m');
  console.log(
    '\033[34minfo\033[0m  - Copying file from \033[33m./.next/\033[0m to \033[33m' + pathBuild + '\033[0m folder'
  );
  await moveFiles();
  console.log('\033[34minfo\033[0m  - Updating paths of assets');
  await replaceFile();
  await generateSitemap();
  await detectGithubBuilder();
}

exportFiles();
