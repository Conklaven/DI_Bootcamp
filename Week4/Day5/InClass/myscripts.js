class Animal {
    constructor(name, age) {
        this.animalName = name;
        this.animalAge = age;
        this.happy = true;
    }
    makeSound(animalSound) {
        console.log(`the animal ${this.animalName} makes the sound ${animalSound}`);
    }
}

class Dolphin extends Animal {
    constructor(dolphinName, dolphinAge, color) {
        super(dolphinName, dolphinAge)
        this.color = color;
        // this.animalSwim = canSwim;
    }
    breathUnderwater() {
        console.log(`I'm a dolphin, i can breath under water`)
    }
}

let dolphinOne = new Dolphin("bob", 2, "black")
console.log(dolphinOne.breathUnderwater())


// Exercise
// # Part 1
// 1) Create a TV class with properties brand, channel and volume. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Whe the methods are called it will increase or decrease the volume by 1.
// 3) Create an Object for the LG TV
class TV {
    constructor(tvBrand, tvChannel = 1, tvVolume = 50) {
        this.brand = tvBrand
        this.channel = tvChannel
        this.volume = tvVolume

    }
    volumeUP() {
        this.volume += 1
    }
    volumeDown() {
        this.volume -= 1
    }
}

class SmartTv extends TV {
    constructor(smartTvBrand, smartTVChannel = 1, smartTvVolume = 50, netflix = true) {
        super(smartTvBrand, smartTVChannel, smartTvVolume)
        this.netflix = netflix;
    }
    volumeUP() {
        this.volume += 10
    }
    volumeDown() {
        this.volume -= 10
    }
}

let lgTV = new TV("LG")
console.log(lgTV)
lgTV.volumeUP()
console.log(lgTV.volume)
lgTV.volumeDown()
console.log(lgTV.volume)

let smartTvOne = new SmartTv("HP")
console.log(smartTvOne)
smartTvOne.volumeUP()
console.log(smartTvOne.volume)
smartTvOne.volumeDown()
console.log(smartTvOne.volume)
// 4) Create a subclass for Smart TV
// 5) It overrides the method increase, so it increase the volume by 10 and not by 1
// 6) Add a attribute of Netflix that should be equal to true by default
// # Part II
// 1) Create a TV class with properties like brand, channel and volume.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
class NewTV {
    constructor(tvBrand, tvChannel = 1, tvVolume = 50) {
        this.brand = tvBrand
        this.channel = tvChannel
        this.volume = tvVolume

    }
    setVolume(vol) {
        if (vol <= 100 && vol >= 0) {
            this.volume = vol
            alert(`the ${this.brand} is set to volume ${this.volume}`)
            console.log(`the ${this.brand} is set to volume ${this.volume}`)
        } else {
            alert("volume was not changed")
            console.log(`the ${this.brand} is set to volume ${this.volume}`)
        }
    }
    volumeUP() {
        if (this.volume < 100) {
            this.volume += 1
            console.log(`the ${this.brand} is set to volume ${this.volume}`)
        }
    }
    volumeDown() {
        if (this.volume > 0) {
            this.volume -= 1
            console.log(`the ${this.brand} is set to volume ${this.volume}`)

        }
    }
    changeChannel(num) {
        if (num <= 50 && num >= 0) {
            this.channel = num
            alert(`the ${this.brand} is set to channel ${this.channel}`)
            console.log(`the ${this.brand} is set to channel ${this.channel}`)

        } else {
            alert("channel was not changed")
            console.log(`the ${this.brand} is set to channel ${this.channel}`)

        }
    }
    resetTV() {
        if (confirm(`Reset TV?`)) {
            this.channel = 1
            this.volume = 50
            alert(`the ${this.brand} was reset and is now set to channel ${this.channel} and volume ${this.volume}`)
            console.log(`the ${this.brand} was reset and is now set to channel ${this.channel} and volume ${this.volume}`)
        } else {
            alert(`the ${this.brand} was NOT reset and is now set to channel ${this.channel} and volume ${this.volume}`)

            console.log(`the ${this.brand} was NOT reset and is now set to channel ${this.channel} and volume ${this.volume}`)

        }
    }
}

let newTV = new NewTV("Visio")
console.log(newTV)
newTV.setVolume(parseFloat(prompt(`set the volume`)))
newTV.volumeUP()
newTV.volumeUP()
newTV.volumeUP()
newTV.setVolume(parseFloat(prompt(`set the volume`)))
newTV.volumeDown()
newTV.volumeDown()
newTV.volumeDown()
newTV.changeChannel(parseFloat(prompt(`set the channel`)))
newTV.changeChannel(parseFloat(prompt(`set the channel`)))
newTV.resetTV()




// 2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 4) Add a method to reset TV so it goes back to channel 1 and volume 50.
// 5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75". (edited) 