/*jshint esversion: 6 */
class ElectroOnOff {
    constructor(name, power) {
		this.name = name;
		this.power = power;
		this.ISKEY = false;
	}

	KeyOn() {
		console.log(this.name + " vkluchilsia");
		this.ISKEY = true;
	}

	KeyOff() {
		console.log(this.name + " viiikluchilsia");
		this.ISKEY = false;
	}
}

class GenerationNoise extends ElectroOnOff {
	constructor(name, power) {
		super(name, power);
        this.isKey = this.ISKEY;
        this.secretProperty = "Пылесосит";
	}

    showProp() {
        if (this.isKey) {
			this.noise = true;
			this.secretProperty = "Пылесосит";
		} else {
			this.noise = false;
			this.secretProperty = "Не пылесосит";
		}
        return this.secretProperty;
    }
}

class Teapot extends ElectroOnOff {
	constructor(name, power) {
		super(name, power);
        this.isKey = this.ISKEY;
        this.warmUp = true;
	}

    showProp() {
        if (this.isKey) {
			this.warmUp = true;
		} else {
			this.warmUp = false;
		}
        return this.warmUp;
    }
}


const BadDevice = new GenerationNoise("Пылесос Toshoiba", 50);
const TeapotOne = new Teapot("Vitek", 50);

BadDevice.KeyOn();
TeapotOne.KeyOff();


console.log(BadDevice.name + "is " + BadDevice.showProp());
console.log(TeapotOne.name + "is " + TeapotOne.showProp());














