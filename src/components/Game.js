import React, { Component } from 'react';

import Header from './Header';
import ColorsWrapper from './ColorsWrapper';

import { createChoosenColorOf3, createChoosenColorOf6, createArrayOfSixColors, createArrayOfThreeColors } from '../helpers/randomArray';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onNewColors = this.onNewColors.bind(this);
        this.onEasy = this.onEasy.bind(this);
        this.onHard = this.onHard.bind(this);
        this.onCreate3Colors = this.onCreate3Colors.bind(this);
        this.onCreate6Colors = this.onCreate6Colors.bind(this);

        this.state = {
            chosenColor: createChoosenColorOf6(),
            currentMode: 'hard',
            arrayFor3Colors: [],
            arrayFor6Colors: []
        }
    }

    componentDidMount() {
        this.setState({
            arrayFor3Colors: this.onCreate3Colors(),
            arrayFor6Colors: this.onCreate6Colors()
        })
    }

    onNewColors() {
        if (this.state.currentMode === 'hard') {
            this.setState({
                chosenColor: createChoosenColorOf6()
            });

        }
        if (this.state.currentMode === 'easy') {
            this.setState({
                chosenColor: createChoosenColorOf3()
            })
        }
    }

    onEasy() {
        this.setState({
            currentMode: 'easy',
            chosenColor: createChoosenColorOf3()
        });

    }

    onHard() {
        this.setState({
            currentMode: 'hard',
            chosenColor: createChoosenColorOf6()
        })

    }

    onCreate3Colors() {
        const slicedArrayOfThreeColors = createArrayOfThreeColors().slice(1);
        const preparedArrayOfThreeColors = [...slicedArrayOfThreeColors.map((color) => color.color), this.state.chosenColor];
        return preparedArrayOfThreeColors;
    }

    onCreate6Colors() {
        const slicedArrayOfSixColors = createArrayOfSixColors().slice(1);
        const preparedArrayOfSixColors = [...slicedArrayOfSixColors.map((color) => color.color), this.state.chosenColor];
        return preparedArrayOfSixColors;
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

