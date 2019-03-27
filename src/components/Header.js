import React from 'react';

import Button from './Button';

import { generateResultMessage } from '../helpers/messages';
import { EASY, HARD } from '../constans/levels';

const Header = ({
    chosenColor,
    onNewColors,
    onEasy,
    onHard,
    currentMode,
    isGameWon,
    isGameRunning
}) => (
        <div>
            <div style={{ backgroundColor: isGameWon ? chosenColor : '#4682b4' }} className="header__up">
                <h1>
                    <div className="header__title-line">The great</div>
                    <div className="header__color-line">{chosenColor}</div>
                    <div className="header__title-line">color game</div>
                </h1>
            </div>

            <div className="header__down">
                <Button additionalClassNames="button__colors" onClick={onNewColors} >
                    {isGameWon ? 'Play again?' : 'New Colors'}
                </Button>

                <p className="header__middle-text">{generateResultMessage(isGameRunning, isGameWon)}</p>

                <Button onClick={onEasy} additionalClassNames="button__easy" isActive={currentMode === EASY}>
                    Easy
                </Button>

                <Button onClick={onHard} isActive={currentMode === HARD}>
                    Hard
                </Button>
            </div>
        </div>
    )


export default Header;
