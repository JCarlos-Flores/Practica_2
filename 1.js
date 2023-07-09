function filterEvenSquareNumbers(arr) {
    return arr.filter((number) => number % 2 === 0 && number ** 2 > 10);
  }
  
  const numbers = [2, 5, 8, 10, 12, 15];
  const filteredNumbers = filterEvenSquareNumbers(numbers);
  console.log(filteredNumbers);
  