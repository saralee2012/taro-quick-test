import network from '@system.network'

export function getNetworkType (opts = {}) {
  const { success, fail, complete } = opts
  const res = { errMsg: 'getNetworkType:ok' }
  return new Promise((resolve, reject) => {
    network.getType({
      success (data) {
        res.networkType = data.type
        res.metered = data.metered
        success && success(data)
        resolve(res)
      },
      reject (data, code) {
        res.errMsg = data
        res.code = code
        fail && fail(res)
        complete && complete(res)
        reject(res)
      }
    })
  })

}

export function onNetworkStatusChange (callback) {
  // TODO: 返回字段
  if(callback) {
    network.subscribe({
      callback
    })
  }
}

export function offNetworkStatusChange () {
  network.unsubscribe()
}