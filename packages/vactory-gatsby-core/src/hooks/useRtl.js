import {useTranslation} from "react-i18next";

export const useRtl = () => {
    const {i18n} = useTranslation();
    return i18n.dir() === 'rtl'
};
