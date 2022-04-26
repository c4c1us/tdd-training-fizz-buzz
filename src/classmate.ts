import { Pupil } from './pupil';

export class Classmate {
  private _pupil: Pupil;
  private _shoutConditions: [() => boolean, string][];

  constructor(pupilNum: number) {
    this._pupil = new Pupil(pupilNum);
    this._shoutConditions = [
      [this.shouldShoutFizzBuzz.bind(this), 'FizzBuzz'],
      [this.shouldShoutFizz.bind(this), 'Fizz'],
      [this.shouldShoutBuzz.bind(this), 'Buzz'],
    ];
  }

  shouldShoutFizz(): boolean {
    return this._pupil.isNumberDivisibleBy(3) && this._pupil.doesNumberContains(3);
  }

  shouldShoutBuzz(): boolean {
    return this._pupil.isNumberDivisibleBy(5) && this._pupil.doesNumberContains(5);
  }

  shouldShoutFizzBuzz(): boolean {
    return this.shouldShoutFizz() && this.shouldShoutBuzz();
  }

  getPupilNumber(): string {
    return this._pupil.number.toString();
  }

  shout(): string {
    for (const [cond, sentence] of this._shoutConditions) {
      if (cond()) return sentence;
    }

    return this.getPupilNumber();
  }
}
