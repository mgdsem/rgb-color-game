import React, { Component } from 'react';

import Header from './Header';

import { createRandomArray } from '../helpers/randomArray';

class Game extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenColor: createRandomArray(),
        }
    }

    onButtonClick() {
        console.log('click');
    }

    render() {
        return (
            <div>
                <Header chosenColor={this.state.chosenColor} onClick={this.onButtonClick} />
            </div>
        )
    }
}

export default Game;

