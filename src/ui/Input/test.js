import React, { Component } from 'react'
// 不受控
export default class Input extends Component {
  onChange = v => {
    if (!this.props.onChange && typeof this.props.onChange !== 'function') return
    this.props.onChange(v)
  }
  render() {
    return <input
      defaultValue={this.props.value}
      onChange={e => this.onChange(e.target.value)} />
  }
}
