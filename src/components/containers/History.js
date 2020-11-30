import React from 'react';
import CanvasComponent from '../canvas/CanvasComponent';
import NavbarComponent from '../NavbarComponent';
import { getHistory } from '../../services/session/translation.history';
import { convertToCoordinates, initiateSignsMap } from '../../services/input.converter';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class History extends React.Component {

    state = {
        canvasList: getHistory(),
        coordinates: initiateSignsMap(),
    }

    render() {
        if (getHistory() == null) {
            return (
                <div>
                    <NavbarComponent />
                    <div>
                        <p className="colour-white">You have no record of translations to view.</p>
                        <Link to="/translation">
                            <Button variant="outline-info dark mt-1 mb-1 mr-2">Translation page</Button>
                        </Link>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <NavbarComponent />
                    <div>
                        <Row>
                            <Col className="text-right bg-dark opacity-95 border-bottom">
                                <Link to="/translation">
                                    <Button variant="outline-info dark mt-1 mb-1 mr-2">Translation page</Button>
                                </Link>
                            </Col>
                        </Row>

                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Non-ASL</th>
                                    <th className="text-left">American Sign Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.canvasList.map((item, i) => {

                                    return (
                                        <tr key={i}>
                                            <td className="align-middle">{i + 1}</td>
                                            <td className="align-middle">{item}</td>
                                            <td className="text-left"><CanvasComponent input={convertToCoordinates(this.state.coordinates, item)} runOnMount={true} /></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                </div >
            );
        }
    }
}
export default History;