import React from 'react';

import ColorSquare from './ColorSquare';

const ColorsWrapper = ({
    currentMode,
}) => (
        <div className="colors-wrapper">
            <div className="colors-wrapper__easy-part">
                <ColorSquare />
                <ColorSquare />
                <ColorSquare />
            </div>
            <div className="colors-wrapper__hard-part">
                <ColorSquare />
                <ColorSquare />
                <ColorSquare />
            </div >
        </div >
    );

export default ColorsWrapper;