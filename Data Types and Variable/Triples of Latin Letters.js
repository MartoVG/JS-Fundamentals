function solve(digit) {
    for (let index = 0; index < digit; index++) {
        let letter = String.fromCharCode(97 + index);

        for (let index1 = 0; index1 < digit; index1++) {
            let letter1 = String.fromCharCode(97 + index1);

            for (let index2 = 0; index2 < digit; index2++) {
                let letter2 = String.fromCharCode(97 + index2);

                console.log(`${letter}${letter1}${letter2}`);
            }
        }
    }

}
solve('3');