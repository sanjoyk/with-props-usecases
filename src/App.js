import React, { Component } from 'react';
import './App.css';
import PropTypes from "prop-types";

class Cat extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const mouse = this.props.mouse;
        return (
         <img 
            style={{ 
            width: "40px", 
            height: "40px",
             position: "absolute", 
             left: mouse.x, 
             top: mouse.y 
            }} 
            src="https://cheesecake.articleassets.meaww.com/v5/assets/m.svg" />
        )
    }
}

// class Mouse extends Component {
class Mouse extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            <div style={{ height: "400px" }} onMouseMove={this.handleMouseMove}>
                {/* <p>The current mouse position is ({this.state.x}, {this.state.y})</p> */}
                {/* <Cat mouse ={this.state} /> */}
                {this.props.children(this.state)}
            </div>

        )
    }
}
Mouse.propTypes ={
    children: PropTypes.func.isRequired
}

class MouseTracker extends Component {
    constructor(props) {
        super(props);
    }
    renderTheCat(mouse){
        return <Cat mouse={mouse} />
    }
    render() {
        return (
            <div >
                <h1>Move the mouse around!</h1>
                {/* method 1 */}
                {/* <Mouse render={(mouse)=>( 
                    <Cat mouse={mouse} />
                )} /> */}

                {/* method 2 */}
                {/* <Mouse children={(mouse)=>( 
                    <Cat mouse={mouse} />
                )} /> */}

                {/* method 3 */}
                {/* <Mouse>
                    {
                        mouse =>(
                            <p>The mouse position is {mouse.x}, {mouse.y} </p>
                        )
                    }
                </Mouse> */}

                {/* method 4 */}
                 <Mouse>
                    {
                        this.renderTheCat
                    }
                </Mouse> 

            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App" >
                <MouseTracker />
            </div>
        );
    }
}

export default App;