// 2. Write a function named "checkYuGiOh" that takes a number, n, as an argument, 
// creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", 
// then returns the resulting array.

function checkYuGiOh(n) {

    let arr = [];

    if (isNaN(n)) {
        console.log(`invalid parameter: ${n}`);
    }
    else {
        for (let i = 1; i <= n; i++) {
            if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
                arr.push("yu-gi-oh");

            }
            else if (i % 5 == 0 && i % 3 == 0) {
                arr.push("gi-oh");
            }
            else if (i % 5 == 0 && i % 2 == 0) {
                arr.push("yu-oh");
            }
            else if (i % 2 == 0 && i % 3 == 0) {
                arr.push("yu-gi");
            }
            else if (i % 2 == 0) {
                arr.push("yu");
            }
            else if (i % 3 == 0) {
                arr.push("gi");
            }
            else if (i % 5 == 0) {
                arr.push("oh");
            }
            else if (i % 2 == 0) {
                arr.push("yu");
            }
            else {
                arr.push(i);
            }
        }
    }
    console.log(arr);
}


checkYuGiOh(5);

function checkYuGiOh(n) {

    let arr = [];

    if (isNaN(n)) {
        console.log(`invalid parameter: ${n}`);
    }
    else {
        for (let i = 1; i <= n; i++) {
            if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
                arr.push("yu-gi-oh");

            }
            else if (i % 5 == 0 && i % 3 == 0) {
                arr.push("gi-oh");
            }
            else if (i % 5 == 0 && i % 2 == 0) {
                arr.push("yu-oh");
            }
            else if (i % 2 == 0 && i % 3 == 0) {
                arr.push("yu-gi");
            }
            else if (i % 2 == 0) {
                arr.push("yu");
            }
            else if (i % 3 == 0) {
                arr.push("gi");
            }
            else if (i % 5 == 0) {
                arr.push("oh");
            }
            else if (i % 2 == 0) {
                arr.push("yu");
            }
            else {
                arr.push(i);
            }
        }
    }
    console.log(arr);
}


checkYuGiOh(10);

function checkYuGiOh(n) {

    let arr = [];

    if (isNaN(n)) {
        console.log(`invalid parameter: ${n}`);
    }
    else {
        for (let i = 1; i <= n; i++) {
            if (i % 5 == 0 && i % 3 == 0 && i % 2 == 0) {
                arr.push("yu-gi-oh");

            }
            else if (i % 5 == 0 && i % 3 == 0) {
                arr.push("gi-oh");
            }
            else if (i % 5 == 0 && i % 2 == 0) {
                arr.push("yu-oh");
            }
            else if (i % 2 == 0 && i % 3 == 0) {
                arr.push("yu-gi");
            }
            else if (i % 2 == 0) {
                arr.push("yu");
            }
            else if (i % 3 == 0) {
                arr.push("gi");
            }
            else if (i % 5 == 0) {
                arr.push("oh");
            }
            else if (i % 2 == 0) {
                arr.push("yu");
            }
            else {
                arr.push(i);
            }
        }
    }
    console.log(arr);
}


checkYuGiOh("fizzbuzz is meh");