export const generateResultMessage = (isGameRunnig, isGameWon) => {
    if (!isGameRunnig) {
        return '';
    }
    console.log(isGameWon);
    return isGameWon ? 'Correct!' : 'Try again!'
}