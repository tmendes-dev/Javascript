let double = function (a) {
  return 2 * a;
};

double = (a) => 2 * a;

console.log(double(Math.PI));

let hello = () => "Hello";

console.log(hello());

function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}

// new Person();

let compareWithThis = function (param) {
  console.log(this === param);
};

compareWithThis(global);

const obj = {};
compareWithThis = compareWithThis.bind(obj);
compareWithThis(obj);

let compareWithThisArrow = (param) => console.log(this === param);
compareWithThisArrow(global);
compareWithThisArrow(obj);
