/**
 * Basic idea here is to keep looping thorugh the code to ensure the the numbers are in the correct order.
 * The first thing we do is for each number in the array check if it is greater than the one above. If it is then set the
 * current value to a temp value, then assign the current value to the one aboave as it is larger then assign the number
 * above with the temp value, completeing the swap. If a swap was need at any time the while loop will go through the entire
 * array again to ensure the order is correct.
 *
 * Time complexity: O(n2)
 *
 * @param numbersToUse
 * @returns {*}
 */
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