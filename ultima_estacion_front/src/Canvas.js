import React, { Component } from 'react';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }
  
    componentDidUpdate() {
        // Draws a square in the middle of the canvas rotated
        // around the centre by this.props.angle
        const { bird } = this.props;
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.arc(bird.x, bird.y, bird.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
  
    render() {
        return <canvas width="800" height="300" ref={this.canvasRef} />;
    }
}

export default Canvas;
