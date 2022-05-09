class Person {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log('Hello');
    }
}

const p1 = new Person('John');
p1.speak();

const person = name => {
    return {
        speak: () => console.log('My name is ' + name)
    }
}
const p2 = person('John');
p2.speak();