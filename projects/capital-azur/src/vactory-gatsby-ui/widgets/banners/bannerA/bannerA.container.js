import React from 'react'
import get from 'lodash.get';
import {Wysiwyg} from "vactory-gatsby-ui";
import { CapitalAzurBanner } from './bannerA';

const CapitalAzurBannerContainer = ({data, breadcrumbItems, node}) => {
    console.log(data)
    const customTitle = get(data, 'components.0.group_banner_title.custom_title');
    const usePageTitle = get(data, 'components.0.group_banner_title.use_page_title');
    const title = usePageTitle ? node.title : customTitle;

    const useBreadcrumb = get(data, 'components.0.group_banner_content.use_breadcrumb') === 1;
    const breadcrumb = useBreadcrumb ? breadcrumbItems : null;

    const color = get(data, 'components.0.group_banner.color', null);

    const settings = {
        title,
        color,
        breadcrumb,
        description: <Wysiwyg html={get(data, 'components.0.group_banner_content.description.value.#text')} />,
        image: get(data, 'components.0.group_banner.image.0._default', null),
        imageMobile: get(data, 'components.0.group_banner.image_mobile.0._default', null),
    };

    return <CapitalAzurBanner settings={settings} />
}

export { CapitalAzurBannerContainer as BannerAContainer }