import React from 'react';

const Header = ({
    chosenColor,
}) => {
    return (
        <div>
            <div className="header__up">
                <h1>
                    <div>The great</div>
                    <div>{chosenColor}</div>
                    <div>color game</div>
                </h1>
            </div>
            <div className="header__down">placeholder</div>
        </div>
    )
}

export default Header;
