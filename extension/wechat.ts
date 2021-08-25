import axios from 'axios';

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

export const sendArticleToWechat = async (
  title: string,
  description: string,
  url:string,
  picurl: string,
) => {
  await axios.request({
    method: 'POST',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=6f251d40-511f-439e-b6cb-d704b1078b8b',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msgtype: 'news',
      news: {
        articles: [
          {
            title,
            description,
            url,
            picurl,
          },
        ],
      },
    },
  });
};
