import React from 'react'
import get from 'lodash.get';
import {PostsContainer} from 'vactory-gatsby-job-ads'

export const ListContainer = ({data}) => {
    console.log(data)
    const nodes = get(data, 'components.0.views.data.nodes', []);
    const pageCount = get(data, 'components.0.views.data.count', 0);
    const termsCity = get(data, 'components.0.views.data.exposed.job_ads_city', []);
    const termsContract = get(data, 'components.0.views.data.exposed.job_ads_contract', []);
    const termsProfession = get(data, 'components.0.views.data.exposed.job_ads_profession', []);

    return <PostsContainer
        nodes={nodes}
        cities={termsCity}
        contracts={termsContract}
        professions={termsProfession}
        pageCount={pageCount}
    />
};
