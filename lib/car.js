class Car {
    constructor(make, model, year, color) {
        if(!Car.makes().includes(make)) throw 'invalid make';
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.miles = 0;
    }
    drive(drivenMiles){
        this.miles = (this.miles + drivenMiles);
        return this.miles;
    }
    static makes() {
        return ['honda', 'ford', 'vw', 'jeep'];
    }
}

module.exports = { Car };
