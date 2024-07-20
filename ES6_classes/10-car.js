const cloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Method for cloning the car
  [cloneSymbol]() {
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Public method to call symbol method
  cloneCar() {
    return this[cloneSymbol]();
  }
}
