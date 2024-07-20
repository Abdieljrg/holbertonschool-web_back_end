import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // Getter & setter for attribute
  get floors() {
    return this._floors;
  }

  // Override evacuationWarnM method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
