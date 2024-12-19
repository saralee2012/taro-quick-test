import MessageChannel from '@hap.io.MessageChannel'

export function createMessageChannel (options = {}) {
  return new MessageChannel({
    package: options.package,
    sign: options.sign,
  })
}