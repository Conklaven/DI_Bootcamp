const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am john doe from vancouver, Canada, latitude (49.2827), longitude(-123.1207)

// exercise 2 ----------------------

let students = {first: 'Elie', last:'Schoppik'}

function displayStudentInfo(object){
    let { first, last } = object;
    console.log(`Your full name is ${first} ${last} `)
}

displayStudentInfo(students)

// exercise 3 ----------------------

const users = { user1: 18273, user2: 92833, user3: 90315 }

let newArray = Object.entries(users);
console.log(newArray)
let doubleArray = newArray.map((element, i) => {
    console.log(element[1])
    element[1]  = element[1]*2
})
console.log(newArray)

// exercise 4 ----------------------

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);
//  prediction  object... correct for


// exercise 5 ----------------------

class Dog {
    constructor(name) {
      this.name = name;
    }
  };

//   2 will extend 

// exercise 6 ----------------------


// [2] === [2] true
// {} === {} false

const object1 = { number: 5 }; //5
const object2 = object1; //5
const object3 = object2; //5
const object4 = { number: 5}; //5
object1.number = 4; //4

console.log(object1.number); //4
console.log(object2.number); //4
console.log(object3.number); //4

console.log(object4.number); //5



class Animal {
  constructor(animalName, animalType, animalColor) {
    this.name = animalName;
    this.type = animalType;
    this.color = animalColor;
  }
  details() {
    // console.log(this.name, this.type, this.color);
    return  this.name + this.type + this.color;
  }
      
}
  class Mamal extends Animal {
    constructor(animalName, animalType, animalColor, animalSound) {
      super(animalName, animalType, animalColor);
      this.sound = animalSound;
    }
    mamalSound() {
      console.log(this.details() + this.sound)
      return this.details(), + this.sound;
    }
  }
let cow = new Mamal("bob","cow", "black", "moo")
cow.mamalSound()

// class Animal {
//   constructor(name, type, color){
//   this.animalName = name;
//   this.animalType = type;
//   this.animalColor = color;
//   }
//   makeSound(){
//       return this.animalName + ' ' + this.animalType + ' ' + this.animalColor
//   }
// }

// class Mamal extends Animal {
//   constructor(mamalName, mamalType, mamalColor, mamalSound) {
//       super(mamalName, mamalType, mamalColor)
//       this.sound = mamalSound;
//       // this.animalSwim = canSwim;
//   }
//   mamalSound(mamalSound) {
//       console.log(this.makeSound() + mamalSound );
//   }
// }

// let cow = new Mamal("bob", "cow", "black", )
// console.log(cow.mamalSound("moo"))
