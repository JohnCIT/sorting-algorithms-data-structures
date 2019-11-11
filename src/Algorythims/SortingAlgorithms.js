

export const bubbleSort = (numbersToUse) => {
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < numbersToUse.length - 1; i++) {
                if (numbersToUse[i] > numbersToUse[i + 1]) {
                    let temp = numbersToUse[i];
                    numbersToUse[i] = numbersToUse[i + 1];
                    numbersToUse[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        return numbersToUse;
};