// class Student{
    
// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);


// class Student{
//     constructor(){
//         this.id = 1;
//         this.name = 'mahi';
//     } 
// }

// const student1 = new Student();
// const student2 = new Student();
// console.log(student1, student2);

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'MM High School';
    } 
}

const student1 = new Student(12, 'Shojib');
const student2 = new Student(13, 'Robin');
const student3 = new Student(15, 'Rohim')
console.log(student1, student2, student3);