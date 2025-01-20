import app from '@system.app'

export function getAppModule () {
  return app
}

export function exitApp (id) {
  app.exit(id)
}

export default {
  getAppModule,
  exitApp
}