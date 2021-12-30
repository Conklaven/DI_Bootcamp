class Animal {
    constructor(name, age){
    this.animalName = name;
    this.animalAge = age;
    this.happy = true;
    }
    makeSound(animalSound){
        console.log(`the animal ${this.animalName} makes the sound ${animalSound}`);
    }
}

class Dolphin extends Animal {
    constructor(dolphinName, dolphinAge, color) {
        super(dolphinName,dolphinAge)
        this.color = color;
        // this.animalSwim = canSwim;
    }
    breathUnderwater() {
        console.log(`I'm a dolphin, i can breath under water`)
    }
}

let dolphinOne = new Dolphin("bob", 2, "black")
console.log(dolphinOne.breathUnderwater())
