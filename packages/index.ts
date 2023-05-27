/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { FooPlugin } from './Foo';
import { ButtonPlugin } from './Button';

const yKitPlugin: Plugin = {
  install(app: App) {
    FooPlugin.install?.(app);
    ButtonPlugin.install?.(app);
  },
};

export default yKitPlugin;

export * from './Foo'
export * from './Button'