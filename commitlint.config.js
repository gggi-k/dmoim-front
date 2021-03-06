module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // commit types
    'type-enum': [
      2,
      'always',
      ['dev', 'style', 'docs', 'test', 'fix', 'revert'],
    ],
  },
}
