// Syntatic Sugar

// function Employee(name, age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Age: " + this.age + "Maaş: " + this.salary);
// }
// const emp = new Employee("Cern",21,3432423);
// console.log(emp);

// class Employee {
//     constructor(name,age,salary){
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     showInfos(){
//         console.log("İsim: " + this.name + " Age: " + this.age + "Maaş: " + this.salary);
//     }


// }
// const emp = new Employee("cerenn",23,321321);
// console.log(emp);
// emp.showInfos();

// STATIC METHODS !!!!!

// class Mathematik {
//     sqrt (x){
//         console.log(x*x);
//     }
//     static cube(x){
//         console.log(x*x*x);
//     }
// }

// const math = new Mathematik();

// const math = new Mathematik();
// math.cube(2);
// console.log(math);
// math.cube(2); // Kullanamıyoruzzz sadexe sınıf ğzerinden erişebiliriz
// Mathematik.cube(3);
// math.sqrt(2);
// Mathematik.sqrt(5); // Kullanamıyoruz çünkü static değil

// Object.create(); // static
// console.log(Math.sqrt(4));




// ************************

// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Age: " + this.age);
// }

// function Employee(name,age,salary){
    
//     Person.call(this,name,age); // CALL KULLANMA NASIL OLUR :))
//     this.salary = salary;
// }
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.toString = function(){
//     console.log("Employee");
// }
// //Overriding - İptal etme (maaşı da yazsın dedik)
// Employee.prototype.showInfos = function(){
//     console.log("İsim: " + this.name + " Age: " + this.age + " Maaş: " + this.salary);
// }
// const emp = new Employee("Ceren",21,33333);

// ES6 İle aynısını yazacağız

class Person { // Superclass BaseClass
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: " + this.name + " Age: " + this.age);

    }
}
    class Employee extends Person { // DerivedClass, SubClass, ChildClass
        constructor(name,age,salary){
           
            //  super.showInfos(); // Superclass kullanma
            // this.age = age;
            // this.name = name; 
            super(name,age);
            this.salary = salary;
        }
        showInfos(){
            console.log("İsim: " + this.name + " Age: " + this.age + "Maaş: "+this.salary);
    
        }
        toString(){
            console.log("Employee");
        }
        raiseSalary(amount){
            this.salary += amount;
        }
    }


const emp = new Employee("Ceren",21,5000);


emp.raiseSalary(5000);
emp.showInfos();
emp.toString();
console.log(emp);