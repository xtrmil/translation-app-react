import React from 'react'

class CanvasComponent extends React.Component {
    constructor(props) {
      super(props);
      this.myCanvas = React.createRef();
    }

    componentDidMount() {
      const ctx = this.myCanvas.current.getContext('2d');
      ctx.fillRect(0, 0, 100, 100);
    }

    render() {
        console.log(this.props);
      return (
        <div>
            <p>Size should be {this.props.size}</p>
            <canvas ref={this.myCanvas} width={this.props.size} height={this.props.size} />
        </div>
      )
    }
}

export default CanvasComponent