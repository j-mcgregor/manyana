module.exports = {
  branches: [
    'main',
    {
      name: 'prerelease',
      prerelease: true
    }
  ],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'feat', scope: '*', release: 'patch' },
          { type: 'fix', scope: '*', release: 'patch' },
          { type: 'perf', scope: '*', release: 'patch' },
          { type: 'docs', scope: '*', release: 'patch' },
          { type: 'style', scope: '*', release: 'patch' },
          { type: 'chore', scope: '*', release: 'patch' },
          { type: 'refactor', scope: '*', release: 'patch' },
          { type: 'test', scope: '*', release: 'patch' },
          { type: 'ci', scope: '*', release: 'patch' }
        ]
      }
    ],
    '@semantic-release/changelog',
    [
      '@semantic-release/npm',
      {
        npmPublish: false
      }
    ],
    '@semantic-release/git',
    '@semantic-release/github',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        presetConfig: {
          types: [
            {
              type: 'feat',
              section: 'Features'
            },
            {
              type: 'fix',
              section: 'Bug Fixes'
            },
            {
              type: 'perf',
              section: 'Performance Improvements'
            },
            {
              type: 'docs',
              section: 'Documentation',
              hidden: false
            },
            {
              type: 'style',
              section: 'Styles',
              hidden: false
            },
            {
              type: 'chore',
              section: 'Miscellaneous Chores',
              hidden: false
            },
            {
              type: 'refactor',
              section: 'Code Refactors',
              hidden: false
            },
            {
              type: 'test',
              section: 'Tests',
              hidden: false
            },
            {
              type: 'ci',
              section: 'CI/CD',
              hidden: false
            }
          ]
        }
      }
    ]
  ]
};
