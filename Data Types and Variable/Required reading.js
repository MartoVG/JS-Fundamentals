function solve(numOfPages, pReadInOneHour, numOfDays) {
    let timeToReadTheBook = numOfPages / pReadInOneHour;
    let hoursPerDay = timeToReadTheBook / numOfDays;
    console.log(hoursPerDay);
}
solve(212, 20, 2);