import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import addElement from '../../utils/add-element'
import shouldUpdate from '../../utils/should-update'

class PopoverContent extends Component {
  popover = React.createRef()
  shouldComponentUpdate(nextProps, nextState) {
    return shouldUpdate({
      nextProps,
      props: this.props
    })
  }
  componentDidUpdate() {
    const popover = this.popover.current
    const { width, height } = popover.getBoundingClientRect()
    const { sourceWidth, sourceHeight, top, left } = this.props
    let currentTop = top - height
    let currentLeft = left + ((sourceWidth - width) / 2 )
    popover.style.left = currentLeft + 'px'
    popover.style.top = currentTop + 'px'
  }
  render() {
    const { content, visible, top, left } = this.props
    return <div
      ref={this.popover}
      className={`ty-front ty-popover ${visible ? 'ty-popover-show' : ''}`}>
      <div className="ty-popover-content">
        { content }
      </div>
    </div>
  }
}

export default class Popover extends Component {
  state = {
    visible: false
  }
  node = addElement({
    mount: this.props.mount(),
    type: 'div',
    attr: {
      style: 'position: absolute; top: 0; left: 0;'
    }
  })
  shouldComponentUpdate(nextProps, nextState) {
    return shouldUpdate({
      nextProps,
      props: this.props,
      state: this.state,
      nextState
    })
  }
  handleMouseIn = e => {
    const node = e.nativeEvent.relatedTarget
    if (!node) return
    const { width, height } = node.getBoundingClientRect()
    this.setState({
      visible: true,
      top: node.offsetTop,
      left: node.offsetLeft,
      sourceWidth: width,
      sourceHeight: height
    })
  }
  handleMouseOut = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    return [
      React.cloneElement(this.props.children, {
        key: 'source',
        onMouseEnter: this.handleMouseIn,
        onMouseOut: this.handleMouseOut
      }),
      ReactDOM.createPortal(
        <PopoverContent
          sourceWidth={this.state.sourceWidth}
          sourceHeight={this.state.sourceHeight}
          left={this.state.left}
          top={this.state.top}
          content={this.props.content}
          visible={this.state.visible} />,
        this.node
      )
    ]
  }
}
Popover.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.object
  ]),
  mount: PropTypes.func
}

Popover.defaultProps = {
  mount: () => document.body
}
