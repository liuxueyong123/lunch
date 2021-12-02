import { sendMessageToWechat, sendArticleToWechat } from '../extension/wechat';

const waimaiNotice = async () => {
  await sendArticleToWechat('外卖时间到', '点外卖了', 'https://waimai.meituan.com/', 'http://lxy520.top/myImage/meituan5.jpeg');
  await sendMessageToWechat('');
};

export default waimaiNotice;
