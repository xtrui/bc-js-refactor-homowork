function isTypeInTypes(type) {
  const types = [
    'engineer',
    'manager',
    'salesman',
  ];
  return types.includes(type);
}

class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }

  validateType(type) {
    if (!isTypeInTypes(type)) {
      throw new Error(`Employee cannot be of type ${type}`);
    }
  }

  toString() {
    return `${this._name} (${this._type})`;
  }
}

module.exports = {
  Employee
}
