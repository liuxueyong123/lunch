import axios from 'axios';

export const sendMessageToWechat = async (message: string) => {
  await axios.request({
    method: 'POST',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=1c0a5531-31d4-4d4b-86f2-eabd43924bcf',
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
    url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=1c0a5531-31d4-4d4b-86f2-eabd43924bcf',
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

export const sendImageToWechat = async (
  base64: string,
  md5: string,
) => {
  await axios.request({
    method: 'POST',
    url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=1c0a5531-31d4-4d4b-86f2-eabd43924bcf',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msgtype: 'image',
      image: {
        base64: base64.replace(/\r|\n/g, ''),
        md5,
      },
    },
  });
};
