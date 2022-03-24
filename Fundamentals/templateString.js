const name = 'Thomas Mendes';
const age = 24;

const up = text => text.toUpperCase();

const templateString = `Meu nome é ${up(name)} e tenho ${age} anos.`;

console.log(templateString);