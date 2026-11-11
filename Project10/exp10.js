const args = process.argv;

if (args.length < 3) {
    console.log("Please provide a number as a command-line argument.");
    process.exit(1);
}

const number = Number(args[2]);

if (isNaN(number)) {
    console.log("Invalid input. Please provide a valid number.");
    process.exit(1);
}

if (number === 0) {
    console.log("Enter a valid number.");
    process.exit(1);
}

function printMultiplicationTable(num) {
    console.log("Name :- Shreyas Chavan");
    console.log("Roll No. :- 42404");
    console.log(`Multiplication Table for ${num}:`);
    console.log("----------------------------");

    // For Loop
    console.log("\nFor Loop");

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }

    console.log("\nWhile Loop");

    let i = 1;

    while (i <= 10) {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }

    console.log("\nDo While Loop");

    let j = 1;

    do {
        console.log(`${num} x ${j} = ${num * j}`);
        j++;
    } while (j <= 10);
}

printMultiplicationTable(number);