import {default as data} from '../../.tmp/webforms'
import {useTranslation} from "react-i18next";

export const useWebform = (id) => {
    const {i18n} = useTranslation();
    const menu = data.webforms.find(item => item.id === id && item.locale === i18n.language);
    return menu;
};
