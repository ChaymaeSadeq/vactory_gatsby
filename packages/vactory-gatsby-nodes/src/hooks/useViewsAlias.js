import {ViewsAlias} from 'vactory-gatsby-nodes'
import {useTranslation} from "react-i18next";

export const useViewsAlias = (id) => {
    const {i18n} = useTranslation();
    const view = ViewsAlias.views.find(item => item.id === id && item.langcode === i18n.language);
    return view.alias;
};
