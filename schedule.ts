import schedule from 'node-schedule';
import getTodayLunch from './functions/getTodayLunch';
import syncWeight from './functions/syncWeight';

schedule.scheduleJob('00 50 11 * * 1-5', () => {
  getTodayLunch();
});

schedule.scheduleJob('05 00 00 * * 1', () => {
  syncWeight();
});
