export default class Building {
  // initialize sqft attribute
  constructor(sqft) {
    // (abstract class checking)
    if (new.target !== Building) {
      this.evacuationWarningMessage();
    }
    // Setter sqft attribute
    this._sqft = sqft;
  }

  // Getter for sqft attribute
  get sqft() {
    return this._sqft;
  }

  // Abstract method
  evacuationWarningMessage() {
    if (this) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
