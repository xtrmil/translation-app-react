import React from 'react';
import CanvasComponent from '../../canvas/CanvasComponent';
import { getHistory } from '../../history/translation.history';
import { convertToCoordinates } from '../../canvas/inputconverter';
import { initiateSignsMap } from '../../canvas/inputconverter';
import { Link } from 'react-router-dom';

class History extends React.Component {

    state = {
        canvasList: getHistory(),
        coordinates: initiateSignsMap()
    }

    render() {
        if(getHistory() ==null ){
            return <div>
                 <h1>Welcome to history</h1>
                 <p>You have no record of translations to view.</p>
                <Link to="/translation">
                    <button>Go to Translation page</button>
                </Link>
            </div>
        } 
        else{
        return (
            <div>
                <h1>Welcome to history</h1>
                <Link to="/translation">
                    <button>Go to Translation page</button>
                </Link>
                { this.state.canvasList.map((item, i) => {

                    return (
                        <div key = {i}>

                                {item}
                                <CanvasComponent input={convertToCoordinates(this.state.coordinates, item)} />

                        </div>)
                })}



            </div>
        );
            }
    }
}

export default History;