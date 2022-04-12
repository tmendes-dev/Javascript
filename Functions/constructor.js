function Car(maxSpeed = 200, delta = 10) {
  let actualSpeed = 0;

  this.accelerate = function () {
    if (actualSpeed + delta <= maxSpeed) {
      actualSpeed += delta;
    } else {
      actualSpeed = maxSpeed;
    }
  };
  this.getActualSpeed = function () {
    return actualSpeed;
  };
}

const uno = new Car();
uno.accelerate();
console.log(uno.getActualSpeed());

const ferrari = new Car(350, 20);
ferrari.accelerate();
console.log(ferrari.getActualSpeed());
