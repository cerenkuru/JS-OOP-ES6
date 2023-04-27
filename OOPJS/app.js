// const emp1 = {
//     name: "Ceren",
//     age: 20,
//     showInfos:function() {console.log("Bilgiler gösteriliyor");}
// };

// const emp2 = {
//     name: "Ahmet",
//     age: 22
// };

// emp1.salary = 4000;
// emp1.showInfos();


// console.log(emp1);

// function Employee(){ // Constructor yapıcı fonks
//     this.name = "Ceren";
// }

// const emp1 = new Employee();
// const emp2 = new Employee();
// console.log(emp1);
// console.log(emp2);

// function Employee(name, age, salary){ 
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.showInfos = function(){
//         console.log(this.name,this.age,this.salary);
//     }
// }
// const emp1 = new Employee("Ceren",23,213123);
// const emp2 = new Employee("Koray",22,3123);

// emp1.showInfos();

// OBJECT CONTRUCTOR

// const object = new Object();
// const object2 = new Object();
// object.name = "crn";
// console.log(object);

// function Employee(name,age){
//     this.name = name;
//     this.age = age;
    //this.showInfos = function(){
    // console.log("İsim: "+this.name + " Yaş: " + this.age)
    // }
    // this.toString = function(){
    //     console.log("Bu bir employee objesi");
    // 
    //}
// }
// Employee.prototype.showInfos = function(){
//     console.log("İsim: "+this.name + " Yaş: " + this.age);
// }


// const emp1 = new Employee("Ceren",21);
// const emp2 = new Employee("Kry",21);
// emp2.showInfos();
// console.log(emp1);
// console.log(emp2);

// console.log(emp1.toString());


// OBJECT CREATE

// const obj = {
//     test1:function(){
//         console.log("Test1");
//     },
//     test2:function(){
//         console.log("test2");
//     }
// }
// //console.log(obj);

// const emp = Object.create(obj);
// emp.name = "crn";
// emp.age = 34;
// console.log(emp);

// function Person(){

// }
// Person.prototype.test1 = function(){
//     console.log("test1");
    
// }
// Person.prototype.test2 = function(){
//     console.log("test2");
// }

// const person = new Person();
// console.log(person);

// function Employee(name,age){
//     this.name = name;
//     this.age = age;
// }

// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.myTest = function(){
//     console.log("my test");
// }
// const emp = new Employee("Ceren",43);

// console.log(emp);
// emp.test1();

// FUNCTION PROTOTYPE CALL APPLY BIND FUNCTIONS

// const obj1 = {
//     number1: 10,
//     number2: 20
// };
// const obj2 = {
//     number1: 30,
//     number2: 40
// };

// function addNumbers(number3,number4){
    // console.log(this.number1);
    // console.log(this);

//     console.log(this.number1 + this.number2 + number3 + number4);
// }

// addNumbers(100,200);
// addNumbers.call(obj1,100,200);


// addNumbers.apply(obj1,[100,200]);
// BIND
// function getNumbersTotal(number3,number4){
//     return this.number1 + this.number2 + number3 + number4;
// }
// const copyFunc1 = getNumbersTotal.bind(obj1);
// const copyFunc2 = getNumbersTotal.bind(obj2);

// console.log(copyFunc1(100,23));


// Inheritance

function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Age: " + this.age);
}
// const person = new Person("Ceren",21);
// console.log(person);

function Employee(name,age,salary){
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age); // CALL KULLANMA NASIL OLUR :))
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}
//Overriding - İptal etme (maaşı da yazsın dedik)
Employee.prototype.showInfos = function(){
    console.log("İsim: " + this.name + " Age: " + this.age + " Maaş: " + this.salary);
}
const emp = new Employee("Ceren",21,33333);

// console.log(emp);
emp.showInfos();
emp.toString();

console.log(emp);