export class Pupil {
  private _num: number;

  constructor(num: number) {
    this._num = num;
  }

  isNumberDivisibleBy(num: number): boolean {
    return this._num % num === 0;
  }

  doesNumberContains(num: number): boolean {
    return this._num.toString().includes(num.toString());
  }

  get number(): number {
    return this._num;
  }
}
