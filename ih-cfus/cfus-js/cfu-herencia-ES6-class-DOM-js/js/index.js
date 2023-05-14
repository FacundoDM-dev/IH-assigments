// starter code

class Car {
  constructor(make, year) {
    this.make = make;
    this.year = year;
  }
  getDescription() {
    return `Este es un coche ${this.make} del año ${this.year}.`;
  }
}

const myCar = new Car("Audi", 2019);
myCar.getDescription();
console.log(myCar.getDescription()); // "This is a(n) Audi car from 2019."




/////////////////////////////////////////////////////////




class person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getGender() {
    return this.gender;
  }
}

class student extends person {
  constructor(name, age, gender, studentId) {
    super(name, age, gender);
    this.studentId = studentId;
  }
  getStudentId() {
    return this.studentId;
  }
}


const student1 = new student("Facundo", 35, "Varón", 33220951)
console.log(student1);

console.log(student1.getName())
console.log(student1.getAge())
console.log(student1.getGender())
console.log(student1.getStudentId())