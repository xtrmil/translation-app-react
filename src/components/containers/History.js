import React from 'react';
import CanvasComponent from '../../canvas/CanvasComponent';
import { getHistory } from '../../history/translation.history';
import { convertToCoordinates } from '../../canvas/inputconverter';
import { initiateSignsMap } from '../../canvas/inputconverter';
import { Link } from 'react-router-dom';

class History extends React.Component {

  state = {
    canvasList: getHistory(),
  }

  render() {
    return (
      <div>
          <h1>Welcome to history</h1>
          <Link to="/translation">
          <button>Go to Translation page</button>
          </Link>
        { this.state.canvasList.map((item,i) => {
            
            return (
                <div><table>
                   
            <th>{item}</th>
            <td><CanvasComponent input= { convertToCoordinates(initiateSignsMap(),item)}/></td>
           
            </table>
            </div>)
        })}
        

      </div>
    );
  }
}

export default History;