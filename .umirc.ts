import { defineConfig } from 'umi';
import routers from './src/routers'

export default defineConfig({
  // layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'UMI_SELF',
  mock: false,
  routes: routers,
  fastRefresh: {},
  antd: {
    mobile: false
  }
});
