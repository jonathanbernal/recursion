/**
 * This function takes a number and generates the Fibonacci
 * sequence containing the Nth number.
 * 
 * @param {*} number the Fibonacci number to generate.
 * @returns the sequence of Fibonacci numbers.
 */
const fibIterativeSequence = (number) => {
    let sequence = [0, 1];

    for(let current = 2; current <= number; current += 1) {
        sequence.push(sequence[current - 1] + sequence[current - 2]);
    }

    return sequence;
}

/**
 * This function generates the Fibonacci sequence for the Nth
 * number using recursion.
 * 
 * @param {*} number the Fibonacci number to generate.
 * @returns the sequence of generated Fibonacci numbers.
 */
const fibRecursiveSequence = (number) => {
    if (number <= 1) {
        return [0, 1];
    } else {
        let temp = fibRecursiveSequence(number - 1);
        temp.push(temp[number - 1] + temp[number - 2]);
        return temp;
    } 
}

let fibNumbersToGenerate = 5;

// console.log(`Iterative Fibonacci: ${fibIterativeSequence(5)}`);
// console.log(`Recursive Fibonacci: ${fibRecursiveSequence(5)}`);

const mergeSort = (list) => {
    const merge = (firstList, secondList) => {
        const sortedArray = [];
        // current value pointers
        let i = 0; // firstList
        let j = 0; // secondList
        let k = 0; // sortedArray

        while(i < firstList.length && j < secondList.length) {
              if(firstList[i] < secondList[j]) {
                sortedArray[k++] = firstList[i++];
              }
              else
                sortedArray[k++] = secondList[j++];
        }
        // copy any remaining elements from each list separatedly
        for(i; i < firstList.length; i += 1) {
            sortedArray[k++] = firstList[i];
        }
        for(j; j < secondList.length; j += 1) {
            sortedArray[k++] = secondList[j];
        }

        return sortedArray;
    }

    if (list.length < 2)
        return list;
    else {
        let firstHalf = mergeSort(list.slice(0, list.length / 2));
        let secondHalf = mergeSort(list.slice(list.length / 2, list.length));
        return merge(firstHalf, secondHalf);
    }
}


console.log(mergeSort([6, 2, 9, 7, 3, 15, 1, 4]));