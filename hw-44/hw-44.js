class Hamburger {
    constructor(price, calories) {
        this.price = price;
        this.calories = calories;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
        this.price += topping.price;
        this.calories += topping.calories;
    }
    calculatePrice(){
        return this.price
    }
    calculateCalories(){
        return this.calories 
    }

    static addMayo(hamburger) {
        hamburger.addTopping({ price: 10, calories: 50 });
    }

    static addKetchup(hamburger) {
        hamburger.addTopping({ price: 5, calories: 20 });
    }
}

class SmallHamburger extends Hamburger {
    constructor() {
        super(50, 20);
    }
}

class BigHamburger extends Hamburger {
    constructor() {
        super(100, 40);
    }
}

let burger = new BigHamburger();
Hamburger.addKetchup(burger);
Hamburger.addMayo(burger);
// first version



