import React, { Component } from 'react';

import ColorSquare from './ColorSquare';

class ColorsWrapper extends Component {
    constructor(props) {
        super(props);

        this.onGetColor = this.onGetColor.bind(this);

        this.state = {
            preparedColors: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.preparedColors.length === 0) {
            this.setState({
                preparedColors: this.onGetColor(),
            })
        }
    }

    onGetColor() {
        if (this.props.sixColors.length === 0) {
            return
        }
        const preparedColors = [];
        let counter = 0;
        while (preparedColors.length <= 6 && counter < 6) {
            counter++
            const colorsToDraw = this.props.sixColors.filter((color) => !preparedColors.includes(color));
            const randomColor = colorsToDraw[Math.floor(Math.random() * (colorsToDraw.length - 1))]
            if (!preparedColors.includes(randomColor)) {
                preparedColors.push(randomColor);
            }
        }
        return preparedColors;


    }

    render() {
        console.log(this.props);
        return (
            <div className="colors-wrapper" >
                <div className="colors-wrapper__easy-part">
                    <ColorSquare color={this.state.preparedColors[0]} />
                    <ColorSquare color={this.state.preparedColors[1]} />
                    <ColorSquare color={this.state.preparedColors[2]} />
                </div>
                {this.props.currentMode === 'hard' && (
                    <div className="colors-wrapper__hard-part">
                        <ColorSquare color={this.state.preparedColors[3]} />
                        <ColorSquare color={this.state.preparedColors[4]} />
                        <ColorSquare color={this.state.preparedColors[5]} />
                    </div >
                )}
            </div >
        )
    }
}

export default ColorsWrapper;



