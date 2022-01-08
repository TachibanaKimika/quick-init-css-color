import React, { Component } from 'react'
import './index.scss'
export default class Input extends Component {
  onChange = (e) => {
    this.props.onChange&&this.props.onChange(e)
  }
  render() {
    return (
      <div className="c-input">
        <input onChange={this.onChange} type="text" value={this.props.value} />
      </div>
    )
  }
}
