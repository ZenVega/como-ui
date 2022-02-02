module.exports = {
  extends: [
    "plugin:vue/vue3-strongly-recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  rules: {
    "vue/no-unused-vars": "error",
    "vue/script-setup-uses-vars": "error",
  },
  env: {
    "vue/setup-compiler-macros": true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
};
