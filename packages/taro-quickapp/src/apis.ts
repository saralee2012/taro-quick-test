import * as supportApi from './api/index'
import appGlobal from './globalQuick'

function getApp () {
  // 返回的是global
  return appGlobal
}

export function initNativeApi (taro) {
  taro.getApp = getApp
  Object.assign(taro, supportApi)
}
