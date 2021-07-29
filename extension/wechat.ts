import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const sendMessageToWechat = async (message: string) => {
  await axios.request({
    method: 'POST',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=6f251d40-511f-439e-b6cb-d704b1078b8b',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msgtype: 'text',
      text: {
        content: message,
        mentioned_list: ['@all'],
      },
    },
  });
};
