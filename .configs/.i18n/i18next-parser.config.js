module.exports = {
  createOldCatalogs: false,
  defaultNamespace: 'common',
  indentation: 2,
  keepRemoved: false,
  lexers: {
    ts: ['JsxLexer'],
    tsx: ['JsxLexer'],
    default: ['JsxLexer'],
  },
  locales: ['vi', 'en', 'ja'],
  output: 'public/locales/$LOCALE/$NAMESPACE.json',
  input: ['../../src/**/*[!stories,test].{ts,tsx}'],
  sort: false,
  verbose: true,
  // lineEnding: 'auto',
  // Control the line ending. See options at https://github.com/ryanve/eol
};
