function solve(number) {
    let sum = 0;
    let counter = 0;

    for (let index = 1; index <= 100; index += 2) {
        counter++;
        sum+= index;
        console.log(index);
        if (counter == number) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}
solve(5);