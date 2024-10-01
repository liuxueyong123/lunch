import schedule from 'node-schedule';
// import getTodayLunch from './functions/getTodayLunch';
// import syncWeight from './functions/syncWeight';
// import fruitNotice from './functions/fruitNotice';
// import waimaiNotice from './functions/waimai';
// import runNotice from './functions/runNotice';
// import { afternoonTeaNotice, dinnerNotice, lunchNotice } from './functions/feishuNotice';
// import afternoonTeaNotice from './functions/afternoonTeaNotice';

schedule.scheduleJob('00 15 11 * * 1-5', () => {
  // waimaiNotice();
});

// schedule.scheduleJob('00 50 11 * * 1-5', () => {
//   getTodayLunch();
// });

schedule.scheduleJob('00 30 14 * * 2,5', () => {
  // fruitNotice();
});

schedule.scheduleJob('00 30 18 * * 1-5', () => {
  // runNotice();
});

// schedule.scheduleJob('00 00 15 31 12 *', () => {
//   afternoonTeaNotice();
// });

// schedule.scheduleJob('05 00 00 * * 1', () => {
//   syncWeight();
// });

schedule.scheduleJob('00 59 11 * * 1-5', () => {
  // lunchNotice();
});

schedule.scheduleJob('00 00 15 * * 1-5', () => {
  // afternoonTeaNotice();
});

schedule.scheduleJob('00 59 17 * * 1-5', () => {
  // dinnerNotice();
});
