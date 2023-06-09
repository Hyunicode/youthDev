/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { FooPlugin } from './Foo';
import { ButtonPlugin } from './Button';
import { RadioPlugin } from './Radio';
import { DialogPlugin } from './Dialog';

const yKitPlugin: Plugin = {
  install(app: App) {
    FooPlugin.install?.(app);
    ButtonPlugin.install?.(app);
    RadioPlugin.install?.(app);
    DialogPlugin.install?.(app);
  },
};

export default yKitPlugin;

export * from './Foo'
export * from './Button'
export * from './Radio'
export * from './Dialog'