import React, { Component } from 'react'

import './index.scss'

export default class Button extends Component {
  constructor(props) {
    super(props)
  }
  handleClick = (e) => {
    if(this.props.onClick) {
      this.props.onClick(e)
    }
  }
  render() {
    return (
      <div className="c-button">
        <button onClick={this.handleClick}>{this.props.children}</button>
      </div>
    )
  }
}
