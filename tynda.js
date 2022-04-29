// little help from: https://www.linkedin.com/in/krist%C3%BDna-kon%C3%AD%C4%8Dkov%C3%A1-4145531a7/

const numbers = [1, 2, 3, 4, 10, 9, 4, 5, 6, 7, 8, 8, 9, 10, 11, 7];
let results = [];

for (let i = 0; i < numbers.length - 3; i++) {
  if (
    numbers[i + 1] - numbers[i] === 1 &&
    numbers[i + 2] - numbers[i + 1] === 1 &&
    numbers[i + 3] - numbers[i + 2] === 1 &&
    numbers[i + 4] - numbers[i + 3] === 1
  ) {
    results.push({
      numbers: [
        numbers[i],
        numbers[i + 1],
        numbers[i + 2],
        numbers[i + 3],
        numbers[i + 4],
      ],
    });
  }
}

console.log(results);