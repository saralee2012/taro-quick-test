import app from '@system.app'

export function getAppModule () {
  return app
}

export function exitApp (id) {
  app.exit(id)
}

export function getAppInfo () {
  return app.getInfo()
}

export function getUpdateManager () {
  return app.getUpdateManager()
}

export default {
  getAppModule,
  exitApp,
  getAppInfo,
  getUpdateManager,
}