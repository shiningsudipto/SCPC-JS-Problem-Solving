// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseString(word) {
    let reversedString = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversedString += word[i];
    }
    return reversedString;
}
console.log(reverseString("hello world"));

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

const numbers = [2, -5, 10, -3, 7];
function sumOfArrayNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i]
        }
    }
    return sum;
}
console.log(sumOfArrayNumbers(numbers));

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

function mostFrequentNumber(nums) {
    let counts = {};
    let maxCount = 0;
    let mostFrequentNum;

    for (let num of nums) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequentNum = num;
        }
    }

    return mostFrequentNum;
}
console.log(mostFrequentNumber([3, 5, 2, 5, 3, 3, 1, 4, 5]));
console.log(mostFrequentNumber([4, 4, 4, 4, 3, 3, 3, 2, 2]));

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function taskFour(arr, tNumber) {
    const idxResult = []
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i])
        if (arr[i] + arr[i + 1] === tNumber) {
            idxResult.push(i, i + 1)
        }
    }
    return idxResult;
}
console.log(taskFour([1, 3, 6, 8, 11, 15], 19))

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return "Input following Number one, Number two, Operator"
    }
}

const plusOperator = '+'
console.log(calculator(5, plusOperator, 10))


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInt(roman) {
    const romanNumeralMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumeralMap[roman[i]];
        const next = romanNumeralMap[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInt("IX"));
console.log(romanToInt("XXI"));
console.log(romanToInt("XIV"));


// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestElement(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

console.log(secondSmallestElement([1, 5, 2, 8, 3, 7, 6, 4]));
console.log(secondSmallestElement([4, 5, 6, 9, 12, 1, 11, 3]));