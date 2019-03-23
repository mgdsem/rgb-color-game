import React from 'react';

const ColorSquare = ({
    color
}) => (
        <div style={{ backgroundColor: color }} className="color-square" ></div>
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