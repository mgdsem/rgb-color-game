import React from 'react';

import ColorSquare from './ColorSquare';

const ColorsWrapper = ({
    currentMode,
    sixColors,
    threeColors
}) => (
        <div className="colors-wrapper" >
            <div className="colors-wrapper__easy-part">
                <ColorSquare color={currentMode === 'easy' ? threeColors.map((color) => Math.floor(Math.random() * 2)) : sixColors.map((color) => {
                    Math.floor(Math.random() * 5)
                })} />
                <ColorSquare />
                <ColorSquare />
            </div>
            {currentMode === 'hard' && (
                <div className="colors-wrapper__hard-part">
                    <ColorSquare />
                    <ColorSquare />
                    <ColorSquare />
                </div >
            )}
        </div >
    );

export default ColorsWrapper;
