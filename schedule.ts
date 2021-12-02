import schedule from 'node-schedule';
import getTodayLunch from './functions/getTodayLunch';
import syncWeight from './functions/syncWeight';
import fruitNotice from './functions/fruitNotice';
import waimaiNotice from './functions/waimai';

schedule.scheduleJob('00 20 11 * * 1-5', () => {
  waimaiNotice();
});

schedule.scheduleJob('00 50 11 * * 1-5', () => {
  getTodayLunch();
});

schedule.scheduleJob('00 32 14 * * 1-5', () => {
  fruitNotice();
});

schedule.scheduleJob('05 00 00 * * 1', () => {
  syncWeight();
});
