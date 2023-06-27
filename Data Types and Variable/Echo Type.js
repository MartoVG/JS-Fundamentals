function solve(parameter) {
    let typeOfParameter = typeof parameter;
    console.log(typeOfParameter);
    if (typeOfParameter == 'string' || typeOfParameter == 'number') {
        console.log(parameter);
    }else{
        
        console.log('Parameter is not suitable for printing');
    }

}
solve(null);