import { Classmate } from './classmate';

for (let pupil = 0; pupil <= 100; pupil++) {
  const classmate = new Classmate(pupil);

  console.log(classmate.shout());
}
