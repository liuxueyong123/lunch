import axios from 'axios';

const sendMessageToFeishu = async (
  message: string,
  imgKey: string,
  options: { isFullImg?: boolean } = {},
) => {
  const { isFullImg = false } = options;

  const imgElements: any = {
    tag: 'img',
    img_key: imgKey,
    preview: true,
    transparent: false,
    alt: {
      tag: 'plain_text',
      content: '',
    },
    corner_radius: '2%',
  };

  if (isFullImg) {
    imgElements.scale_type = 'fit_horizontal';
  } else {
    imgElements.scale_type = 'crop_center';
    imgElements.size = 'large';
  }

  await axios.request({
    method: 'POST',
    url: 'https://open.larkoffice.com/open-apis/bot/v2/hook/ac147068-a63d-4dc5-bd32-e4f257aef961',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      msg_type: 'interactive',
      card: {
        elements: [
          {
            tag: 'div',
            text: {
              tag: 'plain_text',
              content: message,
              text_size: 'normal',
              text_align: 'left',
              text_color: 'default',
            },
          },
          imgElements,
        ],
      },
    },
  });
};

export default sendMessageToFeishu;
