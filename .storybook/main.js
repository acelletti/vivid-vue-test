const vue = require('@vitejs/plugin-vue')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/vue3",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config) {
    const pluginVueIndex = config.plugins.findIndex((config) => config.name === 'vite:vue')
    config.plugins[pluginVueIndex] = vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('vwc-')
        },
      },
    })
    return config
  },
}