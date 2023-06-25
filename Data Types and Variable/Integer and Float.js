function solve(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let typeOfSum = sum % 1 === 0 ? "Integer" : "Float";
    console.log(`${sum} - ${typeOfSum}`);
}
solve(9, 100, 1.1);