export default {
  rootDir: "../../",
  verbose: true,
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(jpg|png)$": "<rootDir>/mocks/fileMock.js",
  },
};
