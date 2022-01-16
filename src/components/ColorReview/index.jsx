import React, { Component } from 'react'
// import copy from 'copy-to-clipboard';
import copy from '../../utils/copy'
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
    const {color, level=5} = this.props
    const colors = new Color(color, level).getColors()
    // const colorArray = [...colors.lightColors.reverse(), ...colors.darkColors]
    return (
      <div className="c-color-review">
        <div className="ccr-color-header" 
        style={{backgroundColor: colors.default}}
        onClick={() => {copy(colors.default)}}
        >
          {colors.default}
        </div>
        <div className="ccr-color-body">
          {
            colors.lightColors.reverse().map((color, index) => (
              <div className="ccr-color-item" 
              onClick={() => {copy(color)}}
              key={index}
              style={{backgroundColor: color, color: 'black', width: 300/colors.lightColors.length + 'px'}}>{color}</div>
            ))
          }
          {
            colors.darkColors.map((color, index) => (
              <div className="ccr-color-item" 
              onClick={() => {copy(color)}}
              key={index}
              style={{backgroundColor: color, color: 'white', width: 300/colors.lightColors.length + 'px'}}>{color}</div>
            ))
          }
        </div>
      </div>
    )
  }
}