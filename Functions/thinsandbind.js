const person = {
  quote: "Hello !",
  speak() {
    console.log(this.quote);
  },
};

person.speak();

const speak = person.speak;
speak();

const speakFromPerson = person.speak.bind(person);
speakFromPerson();

function PersonFunc() {
  this.age = 0;
  const self = this;

  setInterval(
    function () {
      self.age++;
      console.log(self.age);
    } /*.bind(this)*/,
    1000
  );
}

new PersonFunc();
