import {default as menusData} from '../../.tmp/menus'
import {useTranslation} from "react-i18next";

export const useMenu = (menuID) => {
    const {i18n} = useTranslation();
    const menu = menusData.menus.find(item => item.menu_name === menuID && item.locale === i18n.language);
    return JSON.parse(menu.items);
};
