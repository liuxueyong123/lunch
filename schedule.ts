import schedule from 'node-schedule';
// import getTodayLunch from './functions/getTodayLunch';
// import syncWeight from './functions/syncWeight';
import fruitNotice from './functions/fruitNotice';
import waimaiNotice from './functions/waimai';
import runNotice from './functions/runNotice';
// import afternoonTeaNotice from './functions/afternoonTeaNotice';

schedule.scheduleJob('00 10 11 * * 1-5', () => {
  waimaiNotice();
});

// schedule.scheduleJob('00 50 11 * * 1-5', () => {
//   getTodayLunch();
// });

schedule.scheduleJob('00 32 14 * * 1-5', () => {
  fruitNotice();
});

schedule.scheduleJob('00 30 18 * * 1-5', () => {
  runNotice();
});

// schedule.scheduleJob('00 00 15 31 12 *', () => {
//   afternoonTeaNotice();
// });

// schedule.scheduleJob('05 00 00 * * 1', () => {
//   syncWeight();
// });
