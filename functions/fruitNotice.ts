import { sendArticleToWechat, sendMessageToWechat } from '../extension/wechat';

const fruitNotice = async () => {
  await sendArticleToWechat('水果时间到🍉', '做个屁啦，吃水果先啦', 'http://www.agora.io', 'http://lxy520.top/myImage/drink.png');
  await sendMessageToWechat('吃水果了！');
};

export default fruitNotice;
