import React, { Component } from 'react'
import Color from '../../utils/Color'
import './index.scss'

/**
 *
 * @param {string} color
 * @export
 * @class ColorReview
 * @extends {Component}
 */
export default class ColorReview extends Component {
  
  render() {
    const {color} = this.props
    const colors = new Color(color, 12).getColors()
    // const colorArray = [...colors.lightColors.reverse(), ...colors.darkColors]
    return (
      <div className="c-color-review">
        <div className="ccr-color-header" style={{backgroundColor: colors.default}}>
          {colors.default}
        </div>
        <div className="ccr-color-body">
          {
            colors.lightColors.reverse().map((color, index) => (
              <div className="ccr-color-item" 
              key={index}
              style={{backgroundColor: color, color: 'black', width: 300/colors.lightColors.length + 'px'}}>{color}</div>
            ))
          }
          {
            colors.darkColors.map((color, index) => (
              <div className="ccr-color-item" 
              key={index}
              style={{backgroundColor: color, color: 'white', width: 300/colors.lightColors.length + 'px'}}>{color}</div>
            ))
          }
        </div>
      </div>
    )
  }
}