import React, { Component } from 'react'
import { ChromePicker } from 'react-color';
import CodeBlock from '@/components/CodeBlock'
import ColorReview from '@/components/ColorReview'
import Button from '@/components/Button'
import Input from '@/components/Input'
export default class App extends Component {
  state = {
    myColorList: new Set(), // Array<String>
    nowColor: '#efbfff',
    nowColorName: 'color-name'
  }
  handleChangeComplete = ({hex}) => {
    this.setState({ nowColor: hex });
  };
  addColor2Set = (color, name) => {
    console.log(color)
    this.setState(({myColorList}) => ({myColorList: new Set(myColorList).add(JSON.stringify({name, color}))}))
  }
  removeColorFromSet = (color, name) => {
    console.log(this.state.myColorList, color)
    this.setState(({myColorList}) => {
      const newColorList = new Set(myColorList)
      newColorList.delete(JSON.stringify({name, color}))
      return {myColorList: newColorList}
    })
  }
  render() {
    const todoList = [
      // {status: true ,content: 'Support CSS/LESS'}
    ]
    const {myColorList} = this.state
    const colors = [...myColorList].map(string => JSON.parse(string))
    // const pureColors = colors.map(string => JSON.parse(string).color)
    const colorBolck = (
      <div className="color-genetate-text">
        <div className="title">
          copy your theme
        </div>
        <div className="main">
          <CodeBlock color={colors} name="pink" />
        </div>
      </div>
    )
    return (
      <div className="main-page-Layout">
        <div className="main-area">
          <div className="main-intro">
            <div className="intro-left">
              <div className="title">
                Quick Generate Your Style
              </div>
              <div className="details">
                Now ONLY support SCSS
              </div>
              <div className="todo">
              {todoList.map((item, index)=>(<div className="todo-item" key={index}>{item.content}</div>))}
              </div>
            </div>
            <div className="intro-right">
              <CodeBlock color={'D966FF'} name="pink" />
            </div>
          </div>
          
          <div className="color-block-example">
            <ColorReview color={'D966FF'}></ColorReview>
          </div>
          <div className="input-area">
            <div className="left-area">
              <div className="title">
                Add your color here!
              </div>
              <div className="details">
                balabalabalabalabala
              </div>
            </div>
            <div className="right-area">
              <div className="content">
                <ChromePicker 
                  color={ this.state.nowColor }
                  disableAlpha 
                  onChange={ this.handleChangeComplete } />
                <div className="add-color-bottom">
                  <div className="add-name-input">
                    <Input onChange={(e) => {
                      this.setState({nowColorName: e.target.value})
                    }} value={this.state.nowColorName}/>
                  </div>
                  <div className="add-color-button">
                    <Button onClick={() => this.addColor2Set(this.state.nowColor, this.state.nowColorName)}>Add</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="my-colors">
            <div className="my-colors-head">
              <div className="title">COLOR({colors.length})</div>
              <div className="hide-button">
                <Button>hide</Button>
              </div>
            </div>
            <div className="colors-main">
              {colors.map((color, index) => (
                <div className="colors-item" key={index}>
                  <div className="colors-item-header">
                    <Button onClick={() => this.removeColorFromSet(color.color, color.name)}>delete</Button>
                  </div>
                  <div className="colors-inner">
                    <ColorReview color={color.color} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {colors.length>0&&colorBolck}
        </div>
      </div>
    )
  }
}
