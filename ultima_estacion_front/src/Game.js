import React, { Component } from 'react';
import Canvas from './Canvas';

class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bird: {
                x: 50,
                y: 100,
                radius: 20,
                direction: 1
            }
        };
        this.updateAnimationState = this.updateAnimationState.bind(this);
      }
    
    componentDidMount() {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
    
    updateAnimationState() {
        // add some state changing code here
        let direction = this.state.bird.direction;
        console.log("DEBUG DIR: ", this.state.bird.x, this.state.bird.direction);
        if (this.state.bird.x > 800 || this.state.bird.x < 0 ) {
            this.setState(prevState => ({bird: {x: prevState.bird.x - prevState.bird.direction, y: 100, radius: 20, direction: -direction}}));
        } else {
            this.setState(prevState => ({bird: {x: prevState.bird.x + prevState.bird.direction, y: 100, radius: 20, direction: direction}}));
        };
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }
    
    componentWillUnmount() {
        cancelAnimationFrame(this.rAF);
    }
    
    render() {
        return <Canvas bird={this.state.bird} />;
    }
}

export default Game;
