export const createArrayOfSixColors = () => {
    const colors6 = [buildColor(), buildColor(), buildColor(), buildColor(), buildColor(), buildColor()];
    return colors6;
}

export const createArrayOfThreeColors = () => {
    const colors3 = [buildColor(), buildColor(), buildColor()]
    return colors3;
}

const getRandomNumber = () => Math.floor(Math.random() * 255);

export const buildColor = () => `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;


