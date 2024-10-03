// Utility algorithm file to generate math exercises for the MathExercise component

function getRandomNumber(min, max) {
    let randomNumber;
    // Making sure that the generated number is never 0
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (randomNumber === 0);
    return randomNumber;
}

export default function generateMathExercise() {
    // Pool of operations to choose from
    const operations = ['+', '-', '*', '/'];

    // Choose a random operation
    const randomOperation = operations[Math.floor(Math.random() * operations.length)];

    // Generate two random nums for questioning
    let num1 = getRandomNumber(1, 10);
    let num2 = getRandomNumber(1, 10);

    // Handle division edge case to avoid decimals
    if (randomOperation === '/') {
        // Ensures that num is a whole number
        num1 = num1 * num2;
    }

    // Constructing the question string
    const question = `${num1} ${randomOperation} ${num2}`;

    // Calculating the correct answer
    let answer;
    switch (randomOperation) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
        default:
            break;
    }

    // Return the question and answer
    return {
        question,
        answer,
    }
}