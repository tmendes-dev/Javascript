const factorys = [
  "Mercedes",
  "Audi",
  "BMW",
  "Ferrari",
  "Porsche",
  "Lamborghini",
];

function print(name, index) {
  console.log(`${index + 1} - ${name}`);
}

factorys.forEach(print);

const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const gradesBellowSeven = grades.filter((grade) => grade < 7);

console.log(gradesBellowSeven);
