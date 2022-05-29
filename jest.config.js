const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: '.',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  //   moduleNameMapper: {
  //     '^@root/(.*)$': '<rootDir>/$1',
  //     '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  //     '^@components/(.*)$': '<rootDir>/src/components/$1',
  //     '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
  //     '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
  //     '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  //     '^@store/(.*)$': '<rootDir>/src/store/$1',
  //     '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  //   },
  resetMocks: false,
};

module.exports = createJestConfig(customJestConfig);
