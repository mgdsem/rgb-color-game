import React, { Component } from 'react';

import Header from './Header';
import ColorsWrapper from './ColorsWrapper';

import { buildColor, createArrayOfSixColors, createArrayOfThreeColors } from '../helpers/randomArray';
import { EASY, HARD } from '../constans/levels';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onNewColors = this.onNewColors.bind(this);
        this.onEasy = this.onEasy.bind(this);
        this.onHard = this.onHard.bind(this);
        this.onCreate3Colors = this.onCreate3Colors.bind(this);
        this.onCreate6Colors = this.onCreate6Colors.bind(this);
        this.onClickColor = this.onClickColor.bind(this);

        this.state = {
            chosenColor: '',
            currentMode: HARD,
            arrayFor3Colors: [],
            arrayFor6Colors: [],
            isGameWon: false,
            isGameRunning: false
        }
    }

    componentDidMount() {
        const chosenColor = buildColor()
        this.setState({
            arrayFor3Colors: this.onCreate3Colors(chosenColor),
            arrayFor6Colors: this.onCreate6Colors(chosenColor),
            chosenColor: chosenColor
        })
    }

    onNewColors() {
        const chosenColor = buildColor()

        if (this.state.currentMode === HARD) {
            this.setState({
                arrayFor6Colors: this.onCreate6Colors(chosenColor),
                chosenColor: chosenColor,
                isGameWon: false,
                isGameRunning: false
            })
        };

        if (this.state.currentMode === EASY) {
            this.setState({
                arrayFor3Colors: this.onCreate3Colors(chosenColor),
                chosenColor: chosenColor,
                isGameWon: false,
                isGameRunning: false
            })
        }
    }

    onEasy() {
        const chosenColor = buildColor();
        this.setState({
            currentMode: EASY,
            chosenColor: chosenColor,
            arrayFor3Colors: this.onCreate3Colors(chosenColor),
            isGameWon: false,
            isGameRunning: false
        });

    }

    onHard() {
        const chosenColor = buildColor();
        this.setState({
            currentMode: HARD,
            chosenColor: chosenColor,
            arrayFor6Colors: this.onCreate6Colors(chosenColor),
            isGameWon: false,
            isGameRunning: false
        })

    }

    onCreate3Colors(chosenColor) {
        const slicedArrayOfThreeColors = createArrayOfThreeColors().slice(1);
        const preparedArrayOfThreeColors = [...slicedArrayOfThreeColors, chosenColor];
        const finalColors = this.onFinalColors(preparedArrayOfThreeColors, 3);
        return finalColors;
    }

    onCreate6Colors(chosenColor) {
        const slicedArrayOfSixColors = createArrayOfSixColors().slice(1);
        const preparedArrayOfSixColors = [...slicedArrayOfSixColors, chosenColor];
        const finalColors = this.onFinalColors(preparedArrayOfSixColors, 6);
        return finalColors;
    }

    onFinalColors(colors, size) {
        if (colors.length === 0) {
            return
        }
        const preparedColors = [];

        while (preparedColors.length < size) {
            const colorsToDraw = colors.filter((color) => !preparedColors.includes(color));
            const randomColor = colorsToDraw[Math.floor(Math.random() * (colorsToDraw.length))];

            if (!preparedColors.includes(randomColor)) {
                preparedColors.push(randomColor);
            }
        }

        return preparedColors.map((color) => ({
            value: color,
            isVisible: true
        }))
    }

    onClickColor(clickedColor) {
        console.log(clickedColor);
        if (clickedColor === this.state.chosenColor) {
            this.setState(prevState => ({
                isGameWon: true,
                arrayFor6Colors: prevState.arrayFor6Colors.map(() => ({
                    value: clickedColor,
                    isVisible: true
                })),
                arrayFor3Colors: prevState.arrayFor3Colors.map(() => ({
                    value: clickedColor,
                    isVisible: true
                }))
            }))
        } else {
            this.setState(prevState => ({
                isGameRunning: true,
                arrayFor6Colors: prevState.arrayFor6Colors.map((color) => ({
                    value: color.value,
                    isVisible: color.value === clickedColor ? false : color.isVisible
                })),
                arrayFor3Colors: prevState.arrayFor3Colors.map((color) => ({
                    value: color.value,
                    isVisible: color.value === clickedColor ? false : color.isVisible
                }))
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
                    sixColors={this.state.arrayFor6Colors}
                    threeColors={this.state.arrayFor3Colors}
                    onClick={this.onClickColor}
                />
            </div>
        )
    }
}

export default Game;

