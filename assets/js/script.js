'use strict';

class Cat {
  #breed;
  #nickname;
  #miceCaught;
  #successChance;

  constructor(breed, nickname) {
    this.#breed = breed;
    this.#nickname = nickname;
    this.#miceCaught = 0;
    this.#successChance = 0.1;
  }

  get breed() {
    return this.#breed;
  }

  get nickname() {
    return this.#nickname;
  }

  get miceCaught() {
    return this.#miceCaught;
  }

  get successChance() {
    return this.#successChance;
  }

  set nickname(newNickname) {
    if (typeof newNickname !== 'string' || newNickname.trim().length === 0) {
      throw new TypeError('nickname must be a "string"');
    }

    return (this.#nickname = newNickname);
  }

  set successChance(newChance) {
    if (typeof newChance !== 'number' || isNaN(newChance)) {
      throw new TypeError('successChance must be a "number"');
    }

    if (newChance < 0 || newChance > 1) {
      throw new RangeError('successChance must be a number between 0 and 1');
    }
    this.#successChance = newChance;
  }

  sayMeow() {
    console.log(`${this.#nickname} says: Meow`);
  }

  eat() {
    console.log(`${this.#nickname} is eating`);
  }

  sleep() {
    console.log(`${this.#nickname} is sleeping`);
  }

  huntMice() {
    if (Math.random() + this.#successChance >= 0.5) {
      return this.#miceCaught++;
    } else {
      console.log(`${this.#nickname} failed to catch a mouse. Try again`);
    }
  }
}

class StrayCat extends Cat {
  #miceEaten;

  constructor(nickname) {
    super('stray', nickname);
    this.#miceEaten = 0;
    this.successChance = 0.3;
  }

  get miceEaten() {
    return this.#miceEaten;
  }

  eat() {
    if (this.#miceEaten >= this.miceCaught) {
      throw new RangeError(
        `${this.nickname} cannot eat more mice than caught. You need to go hunting!`
      );
    }
    this.#miceEaten++;
  }
}

const strayCat = new StrayCat('Whiskas');

const chartreux = new Cat('Lily', 'Chartreux');
