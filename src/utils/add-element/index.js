import React from 'react'
import ReactDOM from 'react-dom'

export default ({
  type,
  component
}) => {
  const DOM = document.createElement(type)
  document.body.appendChild(DOM)
  if (!component) return
  const RenderComponent = component
  ReactDOM.render(<RenderComponent />, DOM)
}
