export function setData (data: Record<string, unknown>, _cb?: () => void) {
  for (const k in data) {
    this.$set(k, data[k])
  }

  // nextTick
  // cb && setTimeout(cb)
}