import React from 'react';

import Button from './Button';

import { generateResultMessage } from '../helpers/messages'

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
                <Button onClick={onEasy} additionalClassNames="button__easy" children="easy" currentMode={currentMode} />
                <Button onClick={onHard} children="hard" currentMode={currentMode} />
            </div>
        </div>
    )


export default Header;
