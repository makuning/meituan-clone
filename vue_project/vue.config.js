const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers');  // 按需引入组件样式
const ComponentsPlugin = require('unplugin-vue-components/webpack');    // 按需引入组件样式

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  // 按需引入组件样式
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()],
      }),
    ],
  },
})
