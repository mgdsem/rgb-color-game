import React from 'react';

import ColorSquare from './ColorSquare';

const ColorsWrapper = ({
    colors,
    onClick
}) => (
        <div className="colors__wrapper" >
            <div className="colors__inner-wrapper">
                {colors.map((color, index) => (
                    <ColorSquare key={`${color.value}-${index}`} color={color.value} isVisible={color.isVisible} onClick={onClick} />
                ))}
            </div>
        </div >
    )

export default ColorsWrapper;



