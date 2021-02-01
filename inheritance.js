class Parent {
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}
class Chaild extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Chaild('Arnold');
const baby2 = new Chaild('Tom');
console.log(baby);
console.log(baby2);