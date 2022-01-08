export default class Color {
  color
  constructor(color = '#aaa111', level=5, option) {
    this.color = (color+'').replace('#', '')
    this.level = level
    // console.log('%cCOLOR','background-color:#'+color)
  }

  calcHex = (hex) => {
    const ret = Math.round(hex).toString(16)
    if(ret.length<2) {
      return '0' + Math.round(hex).toString(16)
    }else if(ret.length===0) {
      return '00'
    }else {
      return Math.round(hex).toString(16)
    }
  }

  getColors = () => {
    const max = 0xFF // white
    const min = 0x00 // black
    const lightColors = [], darkColors = []
    if(this.color.length!==6) throw new Error('')
    const baseR = parseInt(this.color.slice(0, 2), 16)
    const baseG = parseInt(this.color.slice(2, 4), 16)
    const baseB = parseInt(this.color.slice(4, 6), 16)
    const lightLevelR = max - baseR, lightLevelG = max - baseG, lightLevelB = max - baseB
    const darkLevelR = baseR - min, darkLevelG = baseG - min, darkLevelB = baseB - min
    const calcHex = this.calcHex
    for(let index=0; index < this.level; index++) {
      const lightColor = '#' 
      + calcHex(baseR+lightLevelR*(index+1)/this.level) 
      + calcHex(baseG+lightLevelG*(index+1)/this.level)
      + calcHex(baseB+lightLevelB*(index+1)/this.level)
      const darkColor = '#'
      + calcHex(baseR-darkLevelR*(index+1)/this.level)
      + calcHex(baseG-darkLevelG*(index+1)/this.level)
      + calcHex(baseB-darkLevelB*(index+1)/this.level)
      lightColors.push(lightColor)
      darkColors.push(darkColor)
      // console.log('%cLIGHT__COLOR','background-color:'+lightColor, lightColor)
      // console.log('%cDARK__COLOR','background-color:'+darkColor, darkColor)
    }
    return {
      lightColors, darkColors, default: '#' + this.color
    }
  }
}

// const color = new Color('333FFF', 'blue', 8)

// console.log(JSON.stringify(color.getColors()))