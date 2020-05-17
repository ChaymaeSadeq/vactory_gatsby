import React from 'react'
import get from 'lodash.get';
import {Wysiwyg, BannerA} from "vactory-gatsby-ui";

export const BannerAContainer = ({data, breadcrumbItems, node}) => {
    const customTitle = get(data, 'components.0.group_banner_title.custom_title');
    const usePageTitle = get(data, 'components.0.group_banner_title.use_page_title');
    const title = usePageTitle ? node.title : customTitle;

    const settings = {
        title,
        useBreadcrumb: get(data, 'components.0.group_banner_content.use_breadcrumb') === 1,
        breadcrumbItems: breadcrumbItems,
        description: <Wysiwyg html={get(data, 'components.0.group_banner_content.description.value.#text')} />,
        image: get(data, 'components.0.group_banner.image.0'),
        imageMobile: get(data, 'components.0.group_banner.image_mobile.0'),
    };

    return <BannerA settings={settings}/>
};
