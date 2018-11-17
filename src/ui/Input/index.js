import React, { Component } from 'react'

import filterProps from '../../utils/filter-props'

const parseEvent = {
  onChange: 'onChange',
  onPressEnter: 'onKeyDown',
  onClick: 'onClick'
}

const ignoreProps = [
  'spaceLimited',
  'validate'
]

export default class Input extends Component {
  presetProps = () => {
    const { spaceLimited } = this.props
    const props = filterProps(this.props, key => {
      if (ignoreProps.includes(key)) return false
      const eventName = parseEvent[key]
      if (eventName && typeof this.props[key] === 'function') {
        return {
          name: parseEvent[key],
          value: this[key]
        }
      }
      return true
    })
    if (!props.onChange && spaceLimited) {
      props.onChange = this.limitSpace
    }
    return props
  }
  onChange = e => {
    this.props.onChange(this.limitSpace(e), e)
  }
  onPressEnter = e => {
    if (e.which !== 13) return
    this.props.onPressEnter(e.target.value, e)
  }
  onClick = e => {
    this.props.onClick(e.target.value, e)
  }
  limitSpace = e => {
    const { spaceLimited } = this.props
    let value = e.target.value
    if (!spaceLimited) return value
    if (value.indexOf(' ') > -1) {
      value = value.replace(/\s+/g, '')
      e.target.value = value
    }
    return value
  }
  render() {
    return <input
      {...this.presetProps()}
    />
  }
}

Input.defaultProps = {
  // 空格限制
  spaceLimited: false,
  // 验证
  validate: null,
  type: 'text'
}
