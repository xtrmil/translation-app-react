import React from 'react';
import { Link } from 'react-router-dom';
import CanvasComponent from '../canvas/CanvasComponent';
import { convertToCoordinates, initiateSignsMap } from '../../services/input.converter';
import { addToHistory } from '../../services/session/translation.history';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class TranslationForm extends React.Component {
    onchangeInput;
    state = {
        output: '',
        coordinates: initiateSignsMap()
    }

    handleChange(e) {
        let value = e.target.value;
        value = value.replace(/[^A-Za-z .,]/ig, '')
        this.onchangeInput = value.trim().toLowerCase();
    }

    onTranslationClicked() {
        this.setState({ output: this.onchangeInput });
        addToHistory(this.onchangeInput);

    }
    render() {
        return (
            <div>
                <Row>
                    <Col className="text-right">
                <Link to="/history">
                <Button variant="outline-info dark mt-1 mb-1 mr-2">Go to history</Button>
                </Link>
                </Col>
                </Row>
                <form>
                    <Row>
                        <Col className="text-right">
                    <input type="text" minLength="1" maxLength="40" pattern="[A-Za-z .,]" required placeholder="Enter letters" onChange={(e) => { this.handleChange(e) }} />

                    </Col>
                    <Col className="text-left">
                        <Button type="button" variant="outline-info dark mt-1 mb-1 mr-2" onClick={this.onTranslationClicked.bind(this)}>Translate</Button>
                        </Col>
                    
                    </Row>
                </form>

                <CanvasComponent input={convertToCoordinates(this.state.coordinates, this.state.output)} runOnMount={false} />

            </div>

        );
    }
}




