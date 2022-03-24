let num1 = 1;
{
    let num2 = 2;
    console.log(num1);
    console.log(num2);
}
console.log(num1);
// console.log(num2);

for (let index = 0; index < 10; index++) {
    console.log(index);
}
// console.log('index = ' + index);

const funcs = [];

for (let index = 0; index < 10; index++) {
    funcs.push(() => console.log(index));
}

funcs[0]();
funcs[2]();