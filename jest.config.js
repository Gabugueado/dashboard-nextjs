// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // For React components
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'], // For DOM matchers
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // To handle Next.js style imports
    // Add any other mappings if needed (e.g., for CSS modules if not handled by Next.js preset)
  },
  // If using Next.js, consider using the Next.js Jest plugin for better integration:
  // e.g., by wrapping with `next/jest` as per Next.js documentation.
  // For now, the above should work for basic slice and component tests.
};
