import storage from '@system.storage'
import { generateUnSupportApi } from '../utils'

const storageMap = new Map()


export function setStorage (opts = {}) {
  const { key, data, success, fail, complete } = opts
  const res = { errMsg: 'setStorage:ok' }

  return new Promise((resolve, reject) => {
    storage.set({
      key,
      value: JSON.stringify(data),
      success: () => {
        storageMap.set(key, data)
        success && success(res)
        complete && complete(res)
        resolve(res)
      },
      fail: (message, code) => {
        res.errMsg = message
        res.code = code
        fail && fail(res)
        complete && complete(res)
        reject(res)
      }
    })
  })
}

export function setStorageSync (key, data) {
  storageMap.set(key, data)
  storage.set({
    key,
    value: JSON.stringify(data),
  })
}

export function getStorage (opts = {}) {
  const { key, success, fail, complete } = opts
  const res = { errMsg: 'getStorage:ok' }

  return new Promise((resolve, reject) => {
    storage.get({
      key,
      success: (data) => {
        res.data = data ? JSON.parse(data) : data
        success && success(res)
        complete && complete(res)
        resolve(res)
      },
      fail: (message, code) => {
        res.errMsg = message
        res.code = code
        fail && fail(res)
        complete && complete(res)
        reject(res)
      }
    })
  })
}

export function getStorageSync (key) {
  const data = storageMap.get(key)
  if (data) {
    return storageMap.get(key)
  }
  storage.get({
    key,
    success: (data) => {
      try {
        const parseData = data ? JSON.parse(data) : data
        storageMap.set(key, parseData)
      } catch(e) { /* empty */ }
      
    },
  })

}

export function getStorageInfo () {
  // eslint-disable-next-line
  console.log('快应用暂不支持getStorageInfo api')
}

export function removeStorage (opts = {}) {
  const { key, success, fail, complete } = opts
  const res = { errMsg: 'removeStorage:ok' }

  return new Promise((resolve, reject) => {
    storage.delete({
      key,
      success: () => {
        success && success(res)
        complete && complete(res)
        resolve(res)
      },
      fail: (message, code) => {
        res.errMsg = message
        res.code = code
        fail && fail(res)
        complete && complete(res)
        reject(res)
      }
    })
  })
}

export function clearStorage () {
  return storage.clear()
}

export function getStorageModule () {
  return storage
}

let unSupportApis = ['getStorageInfoSync', 'removeStorageSync', 'clearStorageSync']
unSupportApis = generateUnSupportApi(
  '快应用暂不支持storage的同步存取',
  unSupportApis
)

const qStorage = {
  setStorage,
  setStorageSync,
  getStorage,
  getStorageSync,
  getStorageInfo,
  removeStorage,
  clearStorage,
  getStorageModule
}

// Object.assign(qStorage, unSupportApis)

export default qStorage
