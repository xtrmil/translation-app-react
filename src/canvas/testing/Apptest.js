import React from 'react';
import CanvasComponent from './transCanvas';
import { getHistory } from '../../history/translation.history';
import { convertToCoordinates } from '../inputconverter';
import { initiateSignsMap } from '../inputconverter';

class AppTest extends React.Component {

  state = {
    canvasList: getHistory(),
    input: 'hej'
  }


  handleClick = () => {

    const size = Math.floor(Math.random() * (100 - 50 + 1) + 50);
    const newCanvas = <CanvasComponent size={size}></CanvasComponent>

    this.setState({
        canvasList: [...this.state.canvasList, 
           newCanvas],
           historyMap: getHistory()
     })

  }

  render() {
    return (
      <div className="App">
  
        { this.state.canvasList.map((item,i) => {
            console.log(item);
            return <CanvasComponent input= { convertToCoordinates(initiateSignsMap(),item)}/>
        })}
        {/* <CanvasComponent input = { convertToCoordinates(initiateSignsMap(),this.state.input)}/> */}

      </div>
    );
  }
}

export default AppTest;