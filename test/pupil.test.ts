import { Pupil } from '../src/pupil';

describe('a pupil', () => {
  it('should be 1 if number is 1', () => {
    const pupil = new Pupil(1);

    expect(pupil.number).toBe(1);
  });

  it('should be 2 number is 2', () => {
    const pupil = new Pupil(2);

    expect(pupil.number).toBe(2);
  });

  it('should have pupil number divisible by 3 if number is 3', () => {
    const pupil = new Pupil(3);

    expect(pupil.number).toBe(3);
    expect(pupil.isNumberDivisibleBy(3)).toBe(true);
  });

  it('should have pupil number not divisible by 3 if number is 4', () => {
    const pupil = new Pupil(4);

    expect(pupil.number).toBe(4);
    expect(pupil.isNumberDivisibleBy(3)).toBe(false);
  });

  it('should have pupil number divisible by 5 if number is 5', () => {
    const pupil = new Pupil(5);

    expect(pupil.number).toBe(5);
    expect(pupil.isNumberDivisibleBy(5)).toBe(true);
  });

  it('should have pupil number divisible by 5 and 3 if number is 15', () => {
    const pupil = new Pupil(15);

    expect(pupil.number).toBe(15);
    expect(pupil.isNumberDivisibleBy(5)).toBe(true);
    expect(pupil.isNumberDivisibleBy(3)).toBe(true);
  });

  it('should have pupil number divisible 3 and has 3 in it if number is 33', () => {
    const pupil = new Pupil(33);

    expect(pupil.number).toBe(33);
    expect(pupil.isNumberDivisibleBy(3)).toBe(true);
    expect(pupil.doesNumberContains(3)).toBe(true);
  });
});
