const { pathsToModuleNameMapper } = require("ts-jest");
const { paths } = require("./tsconfig.json").compilerOptions;

// eslint-disable-next-line no-undef
globalThis.ngJest = {
  skipNgcc: true,
  tsconfig: "tsconfig.spec.json",
};

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  globalSetup: "jest-preset-angular/global-setup",
  moduleNameMapper: pathsToModuleNameMapper(paths, { prefix: "<rootDir>" }),
};
