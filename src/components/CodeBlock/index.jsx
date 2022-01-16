import React, { Component } from 'react'
import copy from '../../utils/copy'
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
  initScssString = (colors, name = 'name', lang='scss') => {
    let lightColorString = '', darkColorString = ''
    const variableWrap = (name, type) => {
      switch(type) {
        case 'scss':
          return `$${name}`
        case 'css':
          return `var(--${name})`
        case 'less':
          return `@${name}`
      }
    }
    colors.lightColors.forEach((ele, index)=>lightColorString += `${variableWrap(`${name}-light-${index+1}`, lang)}: ${ele};\n`)
    colors.darkColors.forEach((ele, index)=>darkColorString += `${variableWrap(`${name}-dark-${index+1}`, lang)}: ${ele};\n`)
    return `
/** name: ${name} **/
${variableWrap(name, lang)}: ${colors.default};
${lightColorString}
${darkColorString}
`
  }
  render() {
    const {name, color, level=5} = this.props
    const {lang} = this.state
    let codeString = ''
    if(typeof color == 'string') {
      const colors = new Color(color, level).getColors()
      codeString = this.initScssString(colors, name, lang)
    } else if(color instanceof Array) {
      color.forEach(colorItem => {
        const colors = new Color(colorItem.color, level).getColors()
        codeString += this.initScssString(colors, colorItem.name, lang)
      })
    }

    return (
      <div className="c-code-block">
        <div className="c-code-block-header">
          <div className="ccb-lang-selector">
            <div className="ccb-button">
              <Button onClick={() => this.setState({lang: 'css'})}>CSS</Button>
            </div>
            <div className="ccb-button">
              <Button onClick={() => this.setState({lang: 'scss'})}>SCSS</Button>
            </div>
            <div className="ccb-button">
              <Button onClick={() => this.setState({lang: 'less'})}>LESS</Button>
            </div>
          </div>
          <div className="ccb-copy-button">
            <Button onClick={() => {
              copy(codeString)
            }}>Copy</Button>
          </div>
        </div>
        <SyntaxHighlighter language={lang} style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    )
  }
}
