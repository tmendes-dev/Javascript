function getPrice(tax = 0, currenncy = 'R$') {
    return `${currenncy} ${this.price * (1 - this.disc) * (1 + tax)}`
}

const product = {
    name: 'Notebook',
    price: 4589,
    disc: 0.15,
    getPrice
}

console.log(product.getPrice());

const car = {
    price: 599,
    disc: 0.1
}
console.log(getPrice.call(car));
console.log(getPrice.apply(car));

console.log(getPrice.call(car, 0.17, '$'));
console.log(getPrice.apply(car, [0.18, '$']));
