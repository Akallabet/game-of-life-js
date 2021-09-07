/* eslint-disable no-undef */

export default {
  testPathIgnorePatterns: [
    "node_modules",
    "\\.cache",
    "<rootDir>.*/public",
    "<rootDir>.*/cypress",
  ],
  transformIgnorePatterns: ["node_modules"],
  transform: {},
  // setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  // globals: {
  //   __PATH_PREFIX__: '',
  // },
};
