import React from 'react';

const ColorSquare = ({
    color,
    onClick,
    isVisible
}) => (
        <button
            style={{ backgroundColor: isVisible ? color : '#232426' }}
            className="color-square"
            onClick={() => onClick(color)}
        >
        </button>
    )

export default ColorSquare;

// import React, { Component } from 'react';

// class ColorSquare extends Component {
//     render() {

//         return (
//             <div style={{ backgroundColor: this.props.getColor }} className="color-square"></div>
//         );
//     }
// }

// export default ColorSquare;