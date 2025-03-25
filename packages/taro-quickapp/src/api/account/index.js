import account from '@service.account'

export function authorize (opts = {}) {
  const { success, fail, complete, appid, type, scope,  forceLogin = '1', state = '', redirectUri = '' } = opts
  const res = { errMsg: 'authorize:ok' }
  return new Promise((resolve, reject) => {
    account.authorize({
      appid,
      type,
      scope,
      forceLogin,
      state,
      redirectUri,
      success (data) {
        res.result = data
        success && success(data)
        resolve(res)
      },
      fail (data, code) {
        res.errMsg = data
        res.code = code
        fail && fail(res)
        complete && complete(res)
        reject(res)
      }
    })
  })
}

export function getProvider () {
  return account.getProvider()
}

export function isLogin (opts = {}) {
  const { success, fail } = opts
  const res = { errMsg: 'isLogin:ok' }
  return new Promise((resolve, reject) => {
    account.isLogin({
      success (data) {
        res.result = data
        success && success(data)
        resolve(data)
      },
      fail (data, code) {
        res.errMsg = data
        res.code = code
        fail && fail(res)
        reject(res)
      }
    })
  })

}

export function checkUserSession (opts = {}) {
  const { success, fail } = opts
  const res = { errMsg: 'checkUserSession:ok' }
  return new Promise((resolve, reject) => {
    account.checkUserSession({
      success (data) {
        res.result = data
        success && success(data)
        resolve(data)
      },
      fail (data, code) {
        res.errMsg = data
        res.code = code
        fail && fail(res)
        reject(res)
      }
    })
  })

}

export function getAccountModule () {
  return account
}

export default {
  authorize,
  getAccountModule,
  isLogin,
  checkUserSession,
  getProvider
}
