import React from 'react'
import { Banner } from '../../../../components/Banner';


export const CapitalAzurBanner = ({settings}) => {
    return <Banner
        title={settings.title}
        breadcrumb={settings.breadcrumb}
        description={settings.description}
        image={settings.image}
        imageMobile={settings.imageMobile}
        bgColor={settings.color}
    />
};
