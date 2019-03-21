import React from 'react';

import Button from './Button';

const Header = ({
    chosenColor,
    onClick,
}) => (
        <div>
            <div className="header__up">
                <h1>
                    <div className="header__title-line">The great</div>
                    <div className="header__color-line">{chosenColor}</div>
                    <div className="header__title-line">color game</div>
                </h1>
            </div>
            <div className="header__down">
                <Button additionalClassNames="button__colors" onClick={onClick} children="new colors" />
                <Button onClick={onClick} additionalClassNames="button__easy" children="easy" />
                <Button onClick={onClick} children="hard" />
            </div>
        </div>
    )


export default Header;
