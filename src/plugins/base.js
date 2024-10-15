// Automatically loads and bootstraps files
// in the "./src/components/base" folder.

// Imports
import Vue from 'vue';
import { camelCase, upperFirst } from 'lodash';

const requireComponent = require.context('@/components/base', true, /\.vue$/);

for (const file of requireComponent.keys()) {
  const componentConfig = requireComponent(file);
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '');
  const componentName = upperFirst(camelCase(name));

  Vue.component(
    `Base${componentName}`,
    componentConfig.default || componentConfig
  );
}
