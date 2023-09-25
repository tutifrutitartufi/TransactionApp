module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["import"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json",
  },
  root: true,
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      alias: {
        map: [
          ["@lib", "./lib"],
          ["@api", "./api"],
          ["@utils", "./lib/utils"],
          ["@sports", "./api/topics/sports"],
          ["@directives", "./api/lib/services/transform/directives"],
        ],
        extensions: [".ts", ".js", ".json"],
      },
    },
  },
  rules: {
    "class-methods-use-this": "warn", // May aid in further refactoring efforts
    "@typescript-eslint/no-explicit-any": "warn",
    // Makes life easier when fetching responses from providers
    "@typescript-eslint/no-parameter-properties": "off",
    // Because of placeholder interfaces
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    // There's a problem with extraneous dependencies when importing @types.
    // There's an open ticket for this, but the rule is disabled for now
    // https://github.com/benmosher/eslint-plugin-import/issues/1618
    "import/no-extraneous-dependencies": "off",
    // We don't need this for Lambda functions
    "no-console": "off",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      { prefixWithI: "always" },
    ],
  },
};
