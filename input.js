class Input {
  constructor() {
    document.createElement('input');
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setRequired(required) {
    this.required = required;
  }
}