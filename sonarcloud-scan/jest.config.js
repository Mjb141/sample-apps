module.exports = {
  moduleFileExtensions: ["js", "ts"],
  testResultsProcessor: "jest-sonar-reporter",
  transform: {
    "^.+\\.ts$": ["ts-jest", { babelConfig: false }],
  },
  testMatch: ["<rootDir>/tests/**/*.test.ts"],
};
