import * as supportApi from './api/index'

export function initNativeApi (taro) {
  Object.assign(taro, supportApi)
}
