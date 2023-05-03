module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-hudochenkov/order', 'stylelint-config-prettier'],
  rules: {
    'at-rule-no-unknown': null,
    'color-hex-case': 'lower',
    'color-hex-length': 'long',
    'color-named': 'never',
    'color-no-hex': true,
    'comment-empty-line-before': ['always', { ignore: ['stylelint-commands'] }],
    'comment-whitespace-inside': 'always',
    'declaration-block-no-duplicate-custom-properties': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-range-operator-space-after': 'never',
    'media-feature-range-operator-space-before': 'never',
    'no-descending-specificity': null,
    'order/order': [['dollar-variables', 'custom-properties', 'declarations', 'rules'], { severity: 'warning' }],
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
    'rule-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'property-no-vendor-prefix': [true, { ignoreProperties: [/mask-/, /background-/] }],
    'value-no-vendor-prefix': null,
    'property-no-unknown': [true, { ignoreProperties: [/text-fill/] }],
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          // 'after-same-name',
          // 'inside-block',
          'blockless-after-same-name-blockless',
          'blockless-after-blockless',
          'first-nested',
        ],
      },
    ],
    linebreaks: 'unix',
    'string-quotes': 'single',
    'selector-pseudo-element-colon-notation': 'single',
    'color-hex-length': 'long',
    'alpha-value-notation': 'percentage',
    'declaration-colon-newline-after': null,
    'declaration-block-no-duplicate-properties': true,
    'value-list-comma-newline-after': null,
    indentation: null,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-hudochenkov/order', 'stylelint-config-prettier'],
      rules: {
        'scss/at-import-partial-extension': null,
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-empty-line-before': null,
        'color-function-notation': 'legacy',
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],
        'alpha-value-notation': 'percentage',
        'value-keyword-case': ['lower', { ignoreKeywords: ['currentColor'] }],
      },
    },
  ],
};
