class Grampa{
    constructor(lastName) {
        this.lastName = lastName;
    }
}
class Father extends Grampa{
    constructor(lastName, name){
        super(lastName);
        this.name = name;
    }
}

const myFather = new Father('Mendes','Charles');

console.log(myFather);