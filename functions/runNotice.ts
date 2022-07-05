import { sendArticleToWechat, sendMessageToWechat } from '../extension/wechat';

const runNotice = async () => {
  await sendArticleToWechat('滴滴滴', '你摸鱼我摸鱼，老板宝马变青桔', 'http://www.agora.io', 'http://lxy520.top/myImage/go-home.jpeg');
  await sendMessageToWechat('Go Go Go！');
};

export default runNotice;
