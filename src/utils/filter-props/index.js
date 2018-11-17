export default (props, cb) => {
  if (!cb || typeof cb !== 'function') return props
  const _props = {}
  for (let key in props) {
    const _ = cb(key)
    if (!_) continue
    if (_ && typeof _ === 'object' && !Array.isArray(_)) {
      _props[_.name] = _.value
      continue
    }
    _props[key] = props[key]
  }
  return _props
}
