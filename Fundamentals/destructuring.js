//ES2015 
//Objects
const person = {
    name: 'Foo',
    age: 18,
    adress: {
        street: 'Bar Street',
        number: 15
    }
}

console.log(person);

const { name: n, age: a } = person;

console.log(n, a);

const { lastName: lN = 'foo' } = person;

console.log(lN);

const { adress: { street, number, zipcode } } = person;

console.log(street, number, zipcode);

//Arrays
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [c] = [1];
console.log(c);

const [n1, n2, n3, n4, n5 = 0] = [1, 2, 3, 4];
console.log(n1, n2, n3, n4, n5);

const [, [, value]] = [[1, 2], [3, 4]];
console.log(value);

//Function
const rand = ({ min = 0, max = 1000 }) => {
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}
const obj = {
    max: 10,
    min: 1
}
console.log(rand(obj));

const randArray = ([min = 0, max = 1000]) => {
    if (min > max) {
        [min, max] = [max, min];
    }
    const value = Math.random() * (max - min) + min;
    return Math.floor(value);
}

console.log(randArray([50, 40]));