export const createChoosenColorOf3 = () => {
    const color1 = buildColor();
    const color2 = buildColor();
    const color3 = buildColor();

    const colors = [color1, color2, color3];
    const chosenColor = colors[Math.floor(Math.random() * 2)];
    return chosenColor;
}

export const createChoosenColorOf6 = () => {
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

export const createArrayOfSixColors = () => {
    const color1 = {
        color: buildColor(),
        id: 1
    };
    const color2 = {
        color: buildColor(),
        id: 2
    };
    const color3 = {
        color: buildColor(),
        id: 3
    };
    const color4 = {
        color: buildColor(),
        id: 4
    };
    const color5 = {
        color: buildColor(),
        id: 5
    };
    const color6 = {
        color: buildColor(),
        id: 6
    };

    const colors6 = [color1, color2, color3, color4, color5, color6];
    return colors6;
}

export const createArrayOfThreeColors = () => {
    const color1 = {
        color: buildColor(),
        id: 1
    };
    const color2 = {
        color: buildColor(),
        id: 2
    };
    const color3 = {
        color: buildColor(),
        id: 3
    };
    const colors3 = [color1, color2, color3]
    return colors3;
}





const getRandomNumber = () => Math.floor(Math.random() * 255);

const buildColor = () => `rgb(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;


