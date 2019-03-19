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

    render() {
        console.log(this.state.chosenColor);
        return (
            <div>
                <Header chosenColor={this.state.chosenColor} />
            </div>
        )
    }
}

export default Game;

