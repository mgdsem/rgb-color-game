import React, { Component } from 'react';

import Header from './Header';
import ColorsWrapper from './ColorsWrapper';

import { createRandomArrayOf3Colors, createRandomArrayOf6Colors } from '../helpers/randomArray';

class Game extends Component {
    constructor(props) {
        super(props);

        this.onNewColors = this.onNewColors.bind(this);
        this.onEasy = this.onEasy.bind(this);
        this.onHard = this.onHard.bind(this);

        this.state = {
            chosenColor: createRandomArrayOf6Colors(),
            currentMode: 'hard'
        }
    }

    onNewColors() {
        if (this.state.currentMode === 'hard') {
            this.setState({
                chosenColor: createRandomArrayOf6Colors()
            })
        }
        if (this.state.currentMode === 'easy') {
            this.setState({
                chosenColor: createRandomArrayOf3Colors()
            })
        }
    }

    onEasy() {
        this.setState({
            currentMode: 'easy',
            chosenColor: createRandomArrayOf3Colors()
        });

    }

    onHard() {
        this.setState({
            currentMode: 'hard',
            chosenColor: createRandomArrayOf6Colors()
        })

    }

    CreateColors() {

    }

    render() {
        return (
            <div>
                <Header chosenColor={this.state.chosenColor} onNewColors={this.onNewColors} onEasy={this.onEasy} onHard={this.onHard} />
                <ColorsWrapper currentMode={this.state.currentMode} />
            </div>
        )
    }
}

export default Game;

