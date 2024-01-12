class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `${this.name}`
  }
}

module.exports = {
  Person,
}
