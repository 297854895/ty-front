import React, { Component } from 'react'

export default class Input extends Component {
  state = {
    value: this.props.value,
    prevValue: this.props.value
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevValue !== nextProps.value) return {
      value: nextProps.value,
      prevValue: nextProps.value
    }
    return null
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.value !== this.state.value) return true
    return false
  }
  onChange = value => {
    this.setState({ value })
    if (!this.props.onChange && typeof this.props.onChange !== 'function') return
    this.props.onChange(value)
  }
  render() {
    return <input
      value={this.state.value}
      onChange={e => this.onChange(e.target.value)} />
  }
}
