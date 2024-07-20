import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateAmount(amount);
    this._currency = Pricing._validateCurrency(currency);
  }

  // Getter & setter for amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = Pricing._validateAmount(newAmount);
  }

  // Getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = Pricing._validateCurrency(newCurrency);
  }

  // Mehtod for display price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Method for convert to pricce
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }

  // Validating method
  static _validateAmount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return amount;
  }

  static _validateCurrency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    return currency;
  }
}
