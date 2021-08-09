import csv from 'csvtojson';
import { Parser } from 'json2csv';
import fs from 'fs-extra';
import { RestaurantItem } from '../model';
import { sendMessageToWechat } from '../extension/wechat';

const maxLen = 8;

/**
 * 选择今日星选餐厅
 */
const selectRestaurantFromList = (restaurantList: RestaurantItem[]) => {
  const finalList: string[] = [];

  for (const item of restaurantList.sort((x, y) => y.weight - x.weight)) {
    for (let i = 0; i < item.weight; i += 1) {
      finalList.push(item.restaurant);
    }
  }

  const index1 = Math.floor(Math.random() * finalList.length);
  let index2 = Math.floor(Math.random() * finalList.length);

  while (finalList[index1] === finalList[index2]) {
    index2 = Math.floor(Math.random() * finalList.length);
  }

  return [finalList[index1], finalList[index2]];
};

/**
 * 组装信息
 */
const combineMessage = (restaurantLit: RestaurantItem[], recommendList: string[]) => {
  let message = `${'餐厅列表'.padEnd(maxLen, '\u3000')}评分(权重)\r\n`;

  for (const item of restaurantLit) {
    message += `${item.restaurant.padEnd(maxLen, '\u3000')}   ${item.weight}\r\n`;
  }

  message += '\r\n✧今日星选餐厅✧\r\n';

  for (const [index, item] of recommendList.entries()) {
    message += `${index + 1}.${item}\r\n`;
  }

  return message;
};

/**
 * 降低餐厅权重
 */
const reduceWeight = (
  restaurantList: RestaurantItem[],
  recommendRestaurantList: string[],
  rate: number,
) => {
  const restaurantListCloned = JSON.parse(JSON.stringify(restaurantList));
  for (const item of restaurantListCloned) {
    if (recommendRestaurantList.includes(item.restaurant)) {
      item.weight = Math.floor(item.weight * rate);
    }
  }

  return restaurantListCloned;
};

const getTodayLunch = async () => {
  const restaurantList: RestaurantItem[] = await csv().fromFile('./data/weight_week.csv');
  const recommendRestaurantList = selectRestaurantFromList(restaurantList);

  try {
    const fields = ['restaurant', 'weight'];
    const opts = { fields };
    const parser = new Parser(opts);
    const newRestaurantList = reduceWeight(restaurantList, recommendRestaurantList, 0.6);
    const newRestaurantListCSV = parser.parse(newRestaurantList);

    fs.outputFileSync('./data/weight_week.csv', newRestaurantListCSV);
  } catch (err) {
    await sendMessageToWechat('Error: 降低权重失败！');
  }

  const message = combineMessage(restaurantList, recommendRestaurantList);
  await sendMessageToWechat(message);
};

export default getTodayLunch;
