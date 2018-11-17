import React, { Component } from 'react'

import addElement from '../../utils/add-element'

class PopoverContent extends Component {
  shouldComponentUpdate() {
    return false
  }
  render() {
    return <div>
      213234
    </div>
  }
}

export default class Popover extends Component {
  wraper = React.createRef()
  componentDidMount() {
    addElement({
      type: 'div',
      component: PopoverContent
    })
  }
  render() {
    return this.props.children
  }
}
