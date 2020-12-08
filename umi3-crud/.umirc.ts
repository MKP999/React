import { defineConfig } from 'umi';
import { routes } from './src/router/index'

export default defineConfig({
  title: 'umi3-Ts后台',
  history: {
    type: 'hash',
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  cssModulesTypescriptLoader: {}
});
