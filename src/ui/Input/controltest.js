import React, { Component } from 'react'
// 受控
export default class Input extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value) return true
    return false
  }
  render() {
    return <input value={this.props.value} />
  }
}
