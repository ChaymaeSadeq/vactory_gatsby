import React from 'react'
import get from 'lodash.get';
import {Jumbotron} from "./jumbotron";

export const JumbotronContainer = ({data}) => {
    const title = get(data, 'components.0.title');
    const description = get(data, 'components.0.description');
    const lead = get(data, 'components.0.lead');
    const url = get(data, 'components.0.cta.url');
    const url_label = get(data, 'components.0.cta.title');

    return <Jumbotron
        title={title}
        description={description}
        lead={lead}
        url={url}
        url_label={url_label}
    />
};
