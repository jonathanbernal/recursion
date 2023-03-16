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

console.log(`Iterative Fibonacci: ${fibIterativeSequence(5)}`);
console.log(`Recursive Fibonacci: ${fibRecursiveSequence(5)}`);