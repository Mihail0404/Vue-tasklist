import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslintPluginVue from "eslint-plugin-vue";
import ts from "typescript-eslint";
import globals from "globals";

export default ts.config(
  {
    ignores: ["**/rest-api-schema.d.ts"],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...eslintPluginVue.configs["flat/recommended"],
  eslintConfigPrettier,
  eslintPluginPrettierRecommended,
  {
    files: ["*.vue", "**/*.vue"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off",
    },
  },
  {
    rules: {
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: ["block", "block-like", "cjs-export", "class", "export", "import", "if"],
          next: "*",
        },
        {
          blankLine: "always",
          prev: "*",
          next: ["if", "return"],
        },
        {
          blankLine: "any",
          prev: ["export", "import"],
          next: ["export", "import"],
        },
      ],
    },
  },
);
