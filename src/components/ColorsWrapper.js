import React from 'react';

import ColorSquare from './ColorSquare';

import { EASY, HARD } from '../constans/levels';

const ColorsWrapper = ({
    currentMode,
    sixColors,
    threeColors,
    onClick
}) => {
    const colors = currentMode === EASY ? threeColors : sixColors;

    if (colors.length === 0) {
        return null;
    }

    return (
        <div className="colors__wrapper" >
            <div className="colors__inner-wrapper">
                {colors.map((color) => (
                    <ColorSquare color={color.value} isVisible={color.isVisible} onClick={onClick} />
                ))}
            </div>
        </div >
    )
}

export default ColorsWrapper;



