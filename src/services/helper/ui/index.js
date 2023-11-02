import { notification } from 'antd';
import { useTranslation } from 'react-i18next';


export const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        message: title,
        description: msg,
    });
};
