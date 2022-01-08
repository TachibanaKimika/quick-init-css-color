import React, { Component } from 'react'
import copy from 'copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Button from '../Button'
import Color from '../../utils/Color'
import './index.scss'


/**
 * @param {string} color 主色调
 * @param {string} name
 * @export
 * @class CodeBlock
 * @extends {Component}
 */
export default class CodeBlock extends Component {
  state = {
    lang: 'scss'
  }
  initScssString = (colors, name = 'name') => {
    let lightColorString = '', darkColorString = ''
    colors.lightColors.forEach((ele, index)=>lightColorString += `$${name}-light-${index+1}: ${ele};\n`)
    colors.darkColors.forEach((ele, index)=>darkColorString += `$${name}-dark-${index+1}: ${ele};\n`)
    return `
// name: ${name}
$${name}: ${colors.default};
${lightColorString}
${darkColorString}
`
  }
  render() {
    const {name, color} = this.props
    let codeString = ''
    if(typeof color == 'string') {
      const colors = new Color(color, 12).getColors()
      codeString = this.initScssString(colors, name)
    } else if(color instanceof Array) {
      color.forEach(colorItem => {
        const colors = new Color(colorItem.color, 12).getColors()
        codeString += this.initScssString(colors, colorItem.name)
      })
    }

    return (
      <div className="c-code-block">
        <div className="c-code-block-header">
          <div className="ccb-lang-selector">
            <div className="ccb-button">
              <Button>CSS</Button>
            </div>
            <div className="ccb-button">
              <Button>SCSS</Button>
            </div>
            <div className="ccb-button">
              <Button>LESS</Button>
            </div>
          </div>
          <div className="ccb-copy-button">
            <Button onClick={() => {
              copy(codeString)
            }}>Copy</Button>
          </div>
        </div>
        <SyntaxHighlighter language={'scss'} style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    )
  }
}
