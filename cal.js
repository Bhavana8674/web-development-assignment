function calculator(a, b) {
    let choice = parseInt(prompt("Select your choice:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\nEnter choice:"));

    if (choice === 1) {
        console.log(a + b);
        return a + b;
    } else if (choice === 2) {
        console.log(a - b);
        return a - b;
    } else if (choice === 3) {
        console.log(a * b);
        return a * b;
    } else if (choice === 4) {
        if (b !== 0) {
            console.log(a / b);
            return a / b;
        } else {
            console.log("Error: Division by zero!");
            return 0;
        }
    } else {
        console.log("Invalid choice");
        return 0;
    }
}

function main() {
    let num1 = parseInt(prompt("Enter num 1:"));
    let num2 = parseInt(prompt("Enter num 2:"));
    let result = calculator(num1, num2);
    console.log("Result is " + result);
}

main();
