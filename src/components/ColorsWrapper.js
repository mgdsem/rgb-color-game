import React from 'react';

import ColorSquare from './ColorSquare';

const ColorsWrapper = ({
    currentMode,
    sixColors,
    threeColors,
    onClick
}) => {
    const colors = currentMode === 'easy' ? threeColors : sixColors;

    if (colors.length === 0) {
        return null;
    }

    return (
        <div className="colors-wrapper" >
            <div className="colors-wrapper__easy-part">
                <ColorSquare color={colors[0].value} isVisible={colors[0].isVisible} onClick={onClick} />
                <ColorSquare color={colors[1].value} isVisible={colors[1].isVisible} onClick={onClick} />
                <ColorSquare color={colors[2].value} isVisible={colors[2].isVisible} onClick={onClick} />
            </div>
            {currentMode === 'hard' && (
                <div className="colors-wrapper__hard-part">
                    <ColorSquare color={colors[3].value} isVisible={colors[3].isVisible} onClick={onClick} />
                    <ColorSquare color={colors[4].value} isVisible={colors[4].isVisible} onClick={onClick} />
                    <ColorSquare color={colors[5].value} isVisible={colors[5].isVisible} onClick={onClick} />
                </div >
            )}
        </div >
    )
}

export default ColorsWrapper;



