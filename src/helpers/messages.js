export const generateResultMessage = (isGameRunnig, isGameWon) => {
    if (!isGameRunnig) {
        return '';
    }
    return isGameWon ? 'Correct!' : 'Try again!'
}