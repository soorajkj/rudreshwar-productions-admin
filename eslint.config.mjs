import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    plugins: ["prettier"],
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    parser: "@typescript-eslint/parser",
    ignorePatterns: [
      ".next",
      "node_modules",
      "public",
      "next-env.d.ts",
      "package-lock.json",
      "yarn.lock",
    ],
    rules: {
      "prettier/prettier": "error",
      "no-var": "error",
      "no-console": "error",
      "prefer-const": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-empty-object-type": "off",
    },
  }),
];

export default eslintConfig;
