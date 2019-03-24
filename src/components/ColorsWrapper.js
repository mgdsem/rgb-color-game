import React from 'react';

import ColorSquare from './ColorSquare';

const ColorsWrapper = ({
    currentMode,
    sixColors,
    threeColors
}) => {
    const colors = currentMode === 'easy' ? threeColors : sixColors;
    return (
        <div className="colors-wrapper" >
            <div className="colors-wrapper__easy-part">
                <ColorSquare color={colors[0]} />
                <ColorSquare color={colors[1]} />
                <ColorSquare color={colors[2]} />
            </div>
            {currentMode === 'hard' && (
                <div className="colors-wrapper__hard-part">
                    <ColorSquare color={colors[3]} />
                    <ColorSquare color={colors[4]} />
                    <ColorSquare color={colors[5]} />
                </div >
            )}
        </div >
    )
}

export default ColorsWrapper;



