import account from '@service.account'

export function authorize (opts = {}) {
  const { success, fail, complete } = opts
  const res = { errMsg: 'getContactPick:ok' }
  return new Promise((resolve, reject) => {
    account.authorize({
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

export default {
  authorize
}
