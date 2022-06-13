module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
  // transform: {
  //   "^.+\\.[jt]sx?$": "babel-jest",
  // },
  // transformIgnorePatterns: ["node_modules/?!(react-icons)"],
  // setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
