import React from 'react';
import  {Button}  from './Button';

class ColorPicker extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      color: [42, 25, 146]
    }
    this.applyColor = this.applyColor.bind( this );
    this.chooseColor = this.chooseColor.bind( this )
  }

  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    this.applyColor();
   
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
  
    
  }

  isLight(colorArr) {
    return colorArr.reduce((a,b) => a+b) < 127 * 3;  // it returns true or false;
  }

  formatColor(colorArr) {
    return 'rgb(' + colorArr.join(', ') + ')';   // it returns rgb format of color;
  }

  applyColor() {
    this.chooseColor()
      document.querySelector('body').style.backgroundColor = this.formatColor(this.state.color)
  }

  chooseColor() {
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    return (
      this.setState({
        color: [red, green, blue]
      })
    )
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight(this.state.color) ? "black" : "white"}>
        Your color is {this.formatColor(this.state.color)}!
        </h1>
        <Button onClick = {this.applyColor}>
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}

export default ColorPicker;