export default class BoilerplateBuilder {
  #greeting: string;

  constructor() {
    this.#greeting = 'hello';
  }

  get greeting(): string {
    return this.#greeting;
  }

  set greeting(greeting: string) {
    if (greeting && greeting !== 'yo') {
      throw new Error('Incorrect greeting');
    }

    this.#greeting = greeting;
  }
}
