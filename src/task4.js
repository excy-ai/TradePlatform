'use strict';

class Animal {

    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.energy = 0;
    }

    get nameAndColor() {
        return `${this.name} ${this.color}`;
    }

    eat(count) {
        this.energy += count;
        if (this.energy > 100) {
            this.energy = 100;
        }
    }

    say(message) {
        console.log(message);
    }

}

class Cat extends Animal {
    constructor(name, color) {
        super(name, color);
        this.energy = 50;
    }

    say(message) {
        console.log(message + " Meow");
    }

    eat(count) {
        this.energy += count;
        if (this.energy > 100) {
            this.energy = 100;
        } else if (this.energy < 100) {
            this.say("Not enough food");
        }
    }

    catchMouse() {
        if (this.energy > 20) {
            this.energy -= 20;
            this.say("Mouse caught");
        } else {
            this.say("Need more energy for catching");
        }
    }
}

class BritishShorthair extends Cat {
    catchMouse() {
        this.say("Im so lazy for this");
    }
}

class Dog extends Animal {
    constructor(name, color) {
        super(name, color);
        this.energy = 75;
    }

    say(message) {
        console.log(message + " Woof");
    }

    eat(count) {
        this.energy += count;
        if (this.energy > 100) {
            this.energy = 100;
        } else if (this.energy < 100) {
            this.say("Need more food");
        }
    }

    guard() {
        if (this.energy > 25) {
            this.energy -= 25;
            this.say("You are under protection");
        } else {
            this.say("not enough energy for protection");
        }
    }

}

class PitBull extends Dog {
    guard() {
        if (this.energy > 25) {
            this.energy -= 25;
            this.say("You are under protection like never before");
        } else {
            this.say("not enough energy for protection");
        }
    }
}

let cat = new Cat("catGreen", "Green");
cat.say(cat.nameAndColor);
cat.catchMouse();
cat.catchMouse();
cat.catchMouse();
cat.eat(10);
cat.say("Meow");
let britishCat = new BritishShorthair("eng", "dark");
britishCat.say(britishCat.nameAndColor);
britishCat.catchMouse();

let dog = new Dog("DOGE", "White");
dog.guard();
dog.say(`${dog.nameAndColor} IS GOOD`);

let pitbull = new PitBull("Best", "Black");
pitbull.guard();