import { Classmate } from '../src/classmate';

describe('a classmate', () => {
  it('should shout "one" if pupil is number 1', () => {
    const classmate = new Classmate(1);

    expect(classmate.shout()).toBe('1');
  });

  it('should shout "two" if pupil is number 2', () => {
    const classmate = new Classmate(2);

    expect(classmate.shout()).toBe('2');
  });

  it('should shout "Fizz" if pupil is number 3', () => {
    const classmate = new Classmate(3);

    expect(classmate.shout()).toBe('Fizz');
  });

  it('should shout "Buzz" if pupil is 5', () => {
    const classmate = new Classmate(5);

    expect(classmate.shout()).toBe('Buzz');
  });

  it('should not shout "Fizz" if pupil is divisible by 3', () => {
    const classmate = new Classmate(6);

    expect(classmate.shout()).toBe('6');
  });

  it('should shout not "Buzz" if pupil is divisible by 5 but not contains 5', () => {
    const classmate = new Classmate(10);

    expect(classmate.shout()).toBe('10');
  });

  it('should shout not "Buzz" if pupil is divisible by 3 and 5 but contains 5', () => {
    const classmate = new Classmate(15);

    expect(classmate.shout()).toBe('Buzz');
  });

  it('should shout "Fizz" if pupil is divisible by 3 and has 3 in it', () => {
    const classmate = new Classmate(33);

    expect(classmate.shout()).toBe('Fizz');
  });

  it('should shout "Buzz" if pupil is divisible by 5 and has 5 in it', () => {
    const classmate = new Classmate(55);

    expect(classmate.shout()).toBe('Buzz');
  });
});
