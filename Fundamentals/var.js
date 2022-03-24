{
    {
        {
            var test = '!';
            console.log(test);
        }
    }
}
console.log(test);

const func = () => {
    var local = 123;
    console.log(local);
}

func();
// console.log(local);

var num1 = 1;
{
    var num2 = 2;
    console.log(num1);
}
console.log(num2);


for (var index = 0; index < 10; index++) {
    console.log(index);
}
console.log('index = ' + index);

const funcs = [];

for (var index = 0; index < 10; index++) {
    funcs.push(() => console.log(index));
}

funcs[0]();
funcs[2]();