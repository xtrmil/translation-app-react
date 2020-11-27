import React from 'react';
import CanvasComponent from '../canvas/CanvasComponent';
import { getHistory } from '../../services/session/translation.history';
import { convertToCoordinates, initiateSignsMap } from '../../services/input.converter';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

class History extends React.Component {

    state = {
        canvasList: getHistory(),
        coordinates: initiateSignsMap(),

    }

    render() {
        if (getHistory() == null) {
            return <div>
                <Navbar />
                <div>
                    <h1>Welcome to history</h1>
                    <p>You have no record of translations to view.</p>
                    <Link to="/translation">
                        <button>Go to Translation page</button>
                    </Link>
                </div>
            </div>
        }
        else {
            return (
                <div>
                    <Navbar />
                    <div>
                        <h1>Welcome to history</h1>
                        <Link to="/translation">
                            <button>Go to Translation page</button>
                        </Link>
                        {this.state.canvasList.map((item, i) => {

                            return (
                                <div key={i}>

                                    {item}
                                    <CanvasComponent input={convertToCoordinates(this.state.coordinates, item)} runOnMount={true} />

                                </div>)
                        })}


                    </div>
                </div>
            );
        }
    }
}

export default History;