export const createRandomArrayOf3Colors = () => {
    const color1 = buildColor();
    const color2 = buildColor();
    const color3 = buildColor();

    const colors = [color1, color2, color3];
    const chosenColor = colors[Math.floor(Math.random() * 2)];
    return chosenColor;
}

export const createRandomArrayOf6Colors = () => {
    const color1 = buildColor();
    const color2 = buildColor();
    const color3 = buildColor();
    const color4 = buildColor();
    const color5 = buildColor();
    const color6 = buildColor();

    const colors = [color1, color2, color3, color4, color5, color6];
    const chosenColor = colors[Math.floor(Math.random() * 5)];
    return chosenColor;

}

const getRandomNumber = () => Math.floor(Math.random() * 255);

const buildColor = () => `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

// export const CreateRandomColors = (n) => {

// }