function solve(first, charac, second) {
    let result = first.replace('_', charac);
    let output = result === second? "Matched": "Not Matched"; 
    console.log(output);
}
solve('Str_ng', 'I', 'StrIng');