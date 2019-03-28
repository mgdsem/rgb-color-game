const getRandomNumber = () => Math.floor(Math.random() * 255);

export const buildColor = () => `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;

export const onCreateColors = (chosenColor, size) => {
    const randomColors = new Array(size - 1).fill(null).map((color) => buildColor());
    const colors = [...randomColors, chosenColor];

    if (colors.length === 0) {
        return
    }
    const preparedColors = [];

    while (preparedColors.length < size) {
        const colorsToDraw = colors.filter((color) => !preparedColors.includes(color));
        const randomColor = colorsToDraw[Math.floor(Math.random() * (colorsToDraw.length))];

        if (!preparedColors.includes(randomColor)) {
            preparedColors.push(randomColor);
        }
    }

    return preparedColors.map((color) => ({
        value: color,
        isVisible: true
    }))
}


