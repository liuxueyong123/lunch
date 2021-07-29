import csv from 'csvtojson';
import { Parser } from 'json2csv';
import fs from 'fs-extra';
import { RestaurantItem } from '../model';
import { sendMessageToWechat } from '../extension/wechat';

const syncWeight = async () => {
  const restaurantList: RestaurantItem[] = await csv().fromFile('./data/weight_origin.csv');

  const fields = ['restaurant', 'weight'];
  const opts = { fields };

  try {
    const parser = new Parser(opts);
    const restaurantListCsv = parser.parse(restaurantList);

    fs.outputFileSync('./data/weight_week.csv', restaurantListCsv);
  } catch (err) {
    sendMessageToWechat('Error: 权重同步失败！');
  }
};

export default syncWeight;
