export const createRandomArray = () => {
    const color1 = buildColor();
    const color2 = buildColor();
    const color3 = buildColor();

    const colors = [color1, color2, color3];
    const chosenColor = colors[Math.floor(Math.random() * 2)];
    return chosenColor;
}

const getRandomNumber = () => Math.floor(Math.random() * 255);

const buildColor = () => `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;