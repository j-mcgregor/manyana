const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

/** @type {import('jest').Config} */
// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  collectCoverageFrom: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}',
    'lib/**/*.{js,jsx,ts,tsx}',
    'hooks/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!.husky',
    '!.next',
    '!.vscode'
  ],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/components/(.*)$': './components/$1',
    '^@/pages/(.*)$': './pages/$1'
  },
  testEnvironment: 'jest-environment-jsdom'
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
