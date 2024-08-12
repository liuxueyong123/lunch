import sendMessageToFeishu from '../extension/feishu';

const lunchTexts = [
  '小饭钟敲响啦！今天吃什么？别让肚子空着等！',
  '咕噜咕噜~ 这是你的肚子在提醒：该吃饭啦！',
  '【PO】餐点告警：请放下手中的工作，马上去享用美食！',
  '你不饿，但你的代码已经在饿着肚子运行了！',
  '肚子已经在开会抗议了，还不去吃饭？',
  '你写代码的速度快赶不上你饿肚子的速度了！',
  '数据库在哭泣，因为你忘记喂饱它的管理员了！',
  '饭点不吃，连 Sass 都要编译成土豆泥了！',
  '再不去吃饭，404 就是你的状态码了！',
  '你的肚子已经抛出了一个 Uncaught HungerError！',
  '饭点到了，放下手里的代码，去给胃加点缓存！',
];

const teaTexts = [
  '下午茶了！',
];

const getRandomLunchTexts = () => {
  const index = Math.floor(Math.random() * lunchTexts.length);
  return lunchTexts[index];
};
const getRandomTeaTexts = () => {
  const index = Math.floor(Math.random() * teaTexts.length);
  return teaTexts[index];
};

export const lunchNotice = () => {
  sendMessageToFeishu(getRandomLunchTexts(), 'img_v3_02dm_faf28273-0794-43f6-9482-9e89bef65d1g');
};

export const afternoonTeaNotice = () => {
  sendMessageToFeishu(getRandomTeaTexts(), 'img_v3_02dm_6ace0f63-6637-4fd5-b1f8-7d9f08eeac7g', { isFullImg: true });
};

export const dinnerNotice = () => {
  sendMessageToFeishu(getRandomLunchTexts(), 'img_v3_02dm_75b4a283-fccb-4f24-bf60-169ea3f23d5g');
};
