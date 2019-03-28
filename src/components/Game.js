import React, { Component } from 'react';

import Header from './Header';
import ColorsWrapper from './ColorsWrapper';

import { buildColor, onCreateColors } from '../helpers/randomArray';
import { EASY, HARD } from '../constans/levels';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onNewColors = this.onNewColors.bind(this);
        this.onEasy = this.onEasy.bind(this);
        this.onHard = this.onHard.bind(this);
        this.onClickColor = this.onClickColor.bind(this);

        this.state = {
            chosenColor: '',
            currentMode: HARD,
            arrayOfColors: [],
            isGameWon: false,
            isGameRunning: false
        }
    }

    componentDidMount() {
        const chosenColor = buildColor()
        this.setState({
            arrayOfColors: onCreateColors(chosenColor, 6),
            chosenColor: chosenColor
        })
    }

    onNewColors() {
        const chosenColor = buildColor()
        const size = this.state.currentMode === HARD ? 6 : 3;

        this.setState({
            arrayOfColors: onCreateColors(chosenColor, size),
            chosenColor: chosenColor,
            isGameWon: false,
            isGameRunning: false
        })
    }

    onSwitchLevel(currentMode, size) {
        const chosenColor = buildColor();
        this.setState({
            currentMode: currentMode,
            chosenColor: chosenColor,
            arrayOfColors: onCreateColors(chosenColor, size),
            isGameWon: false,
            isGameRunning: false,
        });
    }

    onEasy() {
        this.onSwitchLevel(EASY, 3);
    }

    onHard() {
        this.onSwitchLevel(HARD, 6);
    }

    onClickColor(clickedColor) {
        if (clickedColor === this.state.chosenColor) {
            this.setState(prevState => ({
                isGameWon: true,
                arrayOfColors: prevState.arrayOfColors.map(() => ({
                    value: clickedColor,
                    isVisible: true
                })),
            }))
        } else {
            this.setState(prevState => ({
                isGameRunning: true,
                arrayOfColors: prevState.arrayOfColors.map((color) => ({
                    value: color.value,
                    isVisible: color.value === clickedColor ? false : color.isVisible
                })),
            }))
        }
    }

    render() {
        return (
            <div>
                <Header
                    chosenColor={this.state.chosenColor}
                    onNewColors={this.onNewColors}
                    onEasy={this.onEasy}
                    onHard={this.onHard}
                    currentMode={this.state.currentMode}
                    isGameWon={this.state.isGameWon}
                    isGameRunning={this.state.isGameRunning}
                />
                <ColorsWrapper
                    currentMode={this.state.currentMode}
                    colors={this.state.arrayOfColors}
                    onClick={this.onClickColor}
                />
            </div>
        )
    }
}

export default Game;

