const grampa = { attr1: "Grampa" };
const father = { __proto__: grampa, attr2: "Father" };
const son = { __proto__: father, attr3: "Son" };

console.log(son.attr1); // Grampa
console.log(son.attr2); // Father
console.log(son.attr3); // Son
console.log(father.attr1); // Grampa

const car = {
  actualSpeed: 0,
  maxSpeed: 200,
  accelerate(delta) {
    this.actualSpeed += delta;
    if (this.actualSpeed > this.maxSpeed) {
      this.actualSpeed = this.maxSpeed;
    }
  },
  status() {
    console.log(`${this.actualSpeed} km/h`);
  },
};
const ferrari = {
  __proto__: car,
  model: "F40",
  maxSpeed: 324,
};

console.log(ferrari.actualSpeed); // 0
ferrari.accelerate(50);
ferrari.status(); // 50 km/h
ferrari.accelerate(100);
ferrari.status(); // 324 km/h
