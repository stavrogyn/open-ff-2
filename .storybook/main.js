module.exports = {
  "stories": [
    "../ui-kit/**/*.stories.mdx",
    "../ui-kit/**/*.stories.@(js|jsx|ts|tsx)",
    "../ui-kit/tooltip/*.stories.@(js|jsx|ts|tsx)",
    "../widgets/**/*.stories.mdx",
    "../widgets/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
