module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'fix',
        'refactor',
        'revert',
        'style',
        'test',
        'enhancement',
        'feature',
      ],
    ],
  },
};
