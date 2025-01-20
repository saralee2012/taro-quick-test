import type { AppInstance } from '@tarojs/runtime'
import { appGlobal } from '@tarojs/plugin-platform-quickapp/dist/runtime-utils'

export function App (config: AppInstance) {
  const {
    onLaunch,
    // mount,
    // unmount,
    onPageNotFound,
    taroGlobalData,

    componentDidShow,
    componentDidHide,
    onShow,
    onHide
  } = config

  return {
    onCreate: function() {
      appGlobal.$app = this;
      onLaunch && onLaunch()
    },
    onPageNotFound,
    onError: null,
    onDestroy: null,
    onRequest: null,
    onHide,
    onShow,
    // mount,
    // unmount,
    taroGlobalData,
    componentDidShow,
    componentDidHide
  }
}