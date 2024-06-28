import React from "react";

const Filter = () => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  // let evenNumbers = numbers.filter((num) => {
  //   return num % 2 === 0;
  // });

  function filter(numbers: number[]) {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
      }
    }
    return evenNumbers;
  }
  let evenNumbers = filter(numbers);

  return (
    <div>
      {evenNumbers.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </div>
  );
};

export default Filter;
