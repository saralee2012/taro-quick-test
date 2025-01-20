import * as supportApi from './api/index'
import appGlobal from './globalQuick'

function getApp () {
  return appGlobal.$app || {}
}

export function initNativeApi (taro) {
  taro.getApp = getApp
  Object.assign(taro, supportApi)
}
