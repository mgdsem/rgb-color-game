import React, { Component } from 'react';

import Header from './Header';
import ColorsWrapper from './ColorsWrapper';

import { buildColor, createArrayOfSixColors, createArrayOfThreeColors } from '../helpers/randomArray';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onNewColors = this.onNewColors.bind(this);
        this.onEasy = this.onEasy.bind(this);
        this.onHard = this.onHard.bind(this);
        this.onCreate3Colors = this.onCreate3Colors.bind(this);
        this.onCreate6Colors = this.onCreate6Colors.bind(this);

        this.state = {
            chosenColor: '',
            currentMode: 'hard',
            arrayFor3Colors: [],
            arrayFor6Colors: []
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

        if (this.state.currentMode === 'hard') {
            this.setState({
                arrayFor6Colors: this.onCreate6Colors(chosenColor),
                chosenColor: chosenColor
            })
        };

        if (this.state.currentMode === 'easy') {
            this.setState({
                arrayFor3Colors: this.onCreate3Colors(chosenColor),
                chosenColor: chosenColor
            })
        }
    }

    onEasy() {
        const chosenColor = buildColor();
        this.setState({
            currentMode: 'easy',
            chosenColor: chosenColor,
            arrayFor3Colors: this.onCreate3Colors(chosenColor)
        });

    }

    onHard() {
        const chosenColor = buildColor();
        this.setState({
            currentMode: 'hard',
            chosenColor: chosenColor,
            arrayFor6Colors: this.onCreate6Colors(chosenColor)
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

        while (preparedColors.length <= size) {
            const colorsToDraw = colors.filter((color) => !preparedColors.includes(color));
            const randomColor = colorsToDraw[Math.floor(Math.random() * (colorsToDraw.length))];

            if (!preparedColors.includes(randomColor)) {
                preparedColors.push(randomColor);
            }
        }
        return preparedColors;

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
                />
                <ColorsWrapper
                    currentMode={this.state.currentMode}
                    sixColors={this.state.arrayFor6Colors}
                    threeColors={this.state.arrayFor3Colors}
                />
            </div>
        )
    }
}

export default Game;

